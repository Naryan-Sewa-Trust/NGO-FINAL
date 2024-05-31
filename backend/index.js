// app.js
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import imageRoutes from "./Router/imageRoutes.js";
import Payment from "./Models/paymentModel.js";
import { default as Razorpay } from "razorpay";
import crypto from "crypto";
import nodemailer from "nodemailer";
import adminRoutes from "./Router/adminRoutes.js"; // Import the admin routes

dotenv.config();

mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("Connection successful");
  })
  .catch((error) => {
    console.log("Mongodb connection error: ", error);
  });

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Gallery - images add in backend and delete
app.use("/api/images", imageRoutes);

const db = mongoose.connection;
app.get("/dbStatus", (req, res) => {
  let status = db.readyState ? "Connected" : "Disconnected";
  res.send(`Database is currently: ${status}`);
});

// Use the admin routes
app.use("/admin", adminRoutes);

const instance = new Razorpay({
  key_id: process.env.KEY,
  key_secret: process.env.SECRET,
});

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
  const expectedSignature = crypto
    .createHmac("sha256", process.env.SECRET)
    .update(body.toString())
    .digest("hex");
  const isAuth = expectedSignature === razorpay_signature;

  if (isAuth) {
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
      text: `Dear Admin,

A new payment has been received from the following donor:

Name: ${payment.name}
Email: ${payment.email}
Phone Number: ${payment.phoneNumber}
Amount: INR ${payment.amount}
Description: ${payment.description}
Payment ID: ${razorpay_payment_id}

Thank you.`,
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
      text: `Dear ${payment.name},

We are overwhelmed with gratitude for your generous donation of INR ${payment.amount} to Narayan Sewa Trust. Your contribution is a beacon of hope for those in need and a testament to your compassion and kindness towards humanity.

With your support, we can continue our mission of serving the underprivileged and providing them with essential services, education, healthcare, and livelihood opportunities. Your donation will directly impact the lives of countless individuals, bringing smiles to their faces and brightening their futures.

As you have chosen to stand with us in our endeavor to make a positive difference in the world, we want to express our deepest appreciation and sincere thanks. Your kindness will ripple through communities, touching hearts and inspiring others to join us in spreading love and compassion.

Your donation has been processed successfully, and the Payment ID is ${razorpay_payment_id}. This unique identifier ensures that your contribution is accounted for and will be utilized efficiently towards our charitable initiatives.

Once again, thank you for your invaluable support. Together, we can create a world where everyone has access to the basic necessities of life and the opportunity to thrive.

With heartfelt gratitude,

Narayan Sewa Trust`,
    };
    transporter.sendMail(donorEmailOptions, (error, info) => {
      if (error) {
        console.log("Error sending email to donor:", error);
      } else {
        console.log("Email sent to donor:", info.response);
      }
    });

    res.redirect(
      `https://narayansewatrust.in/paymentsuccess?reference=${razorpay_payment_id}`
      // `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
    );
  } else {
    // If authentication fails, delete the document corresponding to the razorpay_order_id
    await Payment.findOneAndDelete({ order_id: razorpay_order_id });
    res.status(400).json({ success: false });
  }
});

app.get("/api/getkey", async (req, res) => {
  return res.status(200).json({ key: process.env.KEY });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
