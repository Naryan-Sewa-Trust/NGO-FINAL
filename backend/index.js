import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { default as Razorpay } from "razorpay";
import crypto from "crypto";
import PDFDocument from "pdfkit"; // Import PDFKit for PDF generation
import nodemailer from "nodemailer"; // Import nodemailer for sending emails

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("Connection successful");
  })
  .catch((error) => {
    console.log(error);
  });

const instance = new Razorpay({
  key_id: process.env.KEY,
  key_secret: process.env.SECRET,
});

const paymentschema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    description: String,
    order_id: { type: String },
    razorpay_order_id: {
      type: String,
      default: null,
    },
    razorpay_payment_id: {
      type: String,
      default: null,
    },
    razorpay_signature: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const Payment = mongoose.model("Payment", paymentschema);

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Checkout API
app.post("/checkout", async (req, res) => {
  const { amount, name, email, phoneNumber, description } = req.body;
  const options = {
    amount: Number(req.body.amount * 100),
    currency: "INR",
    receipt: Date.now().toString(),
  };
  const order = await instance.orders.create(options);

  const payment = await Payment.create({
    order_id: order.id,
    amount,
    name,
    email,
    phoneNumber,
    description,
  });

  console.log(order);
  res.status(200).json({
    success: true,
    order,
    paymentId: payment._id, // Send the payment ID back to the client
  });
});

// Payment verification
app.post("/paymentverification", async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;
  const body = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedsgnature = crypto
    .createHmac("sha256", process.env.SECRET)
    .update(body.toString())
    .digest("hex");
  const isauth = expectedsgnature === razorpay_signature;
  //   console.log(expectedsgnature, razorpay_signature, isauth);
  if (isauth) {
    const payment = await Payment.findOneAndUpdate(
      { order_id: razorpay_order_id }, // Query filter
      {
        // Update object
        $set: {
          razorpay_order_id,
          razorpay_payment_id,
          razorpay_signature,
        },
      },
      { new: true } // Return the updated document
    );

    // Send email to admin
    const adminEmailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: "New Payment Received",
      text: `
    Dear Admin,

    A new payment has been received from the following donor:

    Name: ${payment.name}
    Email: ${payment.email}
    Phone Number: ${payment.phoneNumber}
    Amount: INR ${payment.amount}
    Description: ${payment.description}
    Payment ID: ${razorpay_payment_id}

    Thank you.
  `,
    };
    transporter.sendMail(adminEmailOptions, (error, info) => {
      if (error) {
        console.log("Error sending email to admin:", error);
      } else {
        console.log("Email sent to admin:", info.response);
      }
    });

    // Send email to donor
    const donorEmailOptions = {
      from: process.env.EMAIL_USER,
      to: payment.email,
      subject: "Payment Confirmation",
      // text: `Thank you for your donation of INR ${req.body.amount}. Payment ID: ${razorpay_payment_id}`,
      text: `
Dear ${payment.name},

We are overwhelmed with gratitude for your generous donation of INR ${payment.amount} to Narayan Sewa Trust. Your contribution is a beacon of hope for those in need and a testament to your compassion and kindness towards humanity.

With your support, we can continue our mission of serving the underprivileged and providing them with essential services, education, healthcare, and livelihood opportunities. Your donation will directly impact the lives of countless individuals, bringing smiles to their faces and brightening their futures.

As you have chosen to stand with us in our endeavor to make a positive difference in the world, we want to express our deepest appreciation and sincere thanks. Your kindness will ripple through communities, touching hearts and inspiring others to join us in spreading love and compassion.

Your donation has been processed successfully, and the Payment ID is ${razorpay_payment_id}. This unique identifier ensures that your contribution is accounted for and will be utilized efficiently towards our charitable initiatives.

Once again, thank you for your invaluable support. Together, we can create a world where everyone has access to the basic necessities of life and the opportunity to thrive.

With heartfelt gratitude,

Narayan Sewa Trust
`,
    };
    transporter.sendMail(donorEmailOptions, (error, info) => {
      if (error) {
        console.log("Error sending email to donor:", error);
      } else {
        console.log("Email sent to donor:", info.response);
      }
    });

    res.redirect(
      `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
    );
  } else {
    // If authentication fails, delete the document corresponding to the razorpay_order_id
    await Payment.findOneAndDelete({ order_id: razorpay_order_id });
    res.status(400).json({ success: false });
  }
});

app.get("/api/getkey", (req, res) => {
  return res.status(200).json({ key: process.env.KEY });
});

app.listen(8000, () => {
  console.log(`Server listening on port no 8000`);
});
