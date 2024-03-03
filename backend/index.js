import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { default as Razorpay } from "razorpay";
import crypto from "crypto";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer"; // Import nodemailer for sending emails

dotenv.config();

const app = express();
// Middleware to parse JSON bodies
app.use(bodyParser.json());

// app.use(
//   cors({
//     origin: "https://www.narayansewatrust.in",
//   })
// );
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

const db = mongoose.connection;

app.get("/dbStatus", (req, res) => {
  let status = db.readyState ? "Connected" : "Disconnected";
  res.send(
    `Database is currently: ${status} `
    // `Database is currently: ${status} and ${process.env.MONGODB} and  ${process.env.JWT_SECRET}`
  );
});

// Middleware to authenticate admin
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  // console.log(token);

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.adminId = decoded.adminId;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

// Define admin schema
const adminSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String,
  isAdmin: { type: Boolean, default: false },
});

const Admin = mongoose.model("Admin", adminSchema);

// Registration endpoint
app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new admin with isAdmin set to true
    const admin = await Admin.create({
      username,
      password: hashedPassword,
      isAdmin: true,
    });

    res.status(201).json({ message: "Admin registered successfully", admin });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Add /admin/profile route
app.put("/admin/profile", authMiddleware, async (req, res) => {
  try {
    // Get the new username and password from the request body
    const { username, password } = req.body;

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update the admin's username and password in the database
    await Admin.updateOne(
      { _id: req.adminId },
      { username, password: hashedPassword }
    );

    // Send a response back to the client
    res.status(200).json({ message: "Profile updated successfully" });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ message: "Error updating profile" });
  }
});

// Admin login route
app.post("/admin/login", async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  // console.log(username, password);

  // Find admin by username
  const admin = await Admin.findOne({ username });

  if (!admin) {
    return res.status(404).json({ message: "Admin not found" });
  }

  // Compare passwords
  const isMatch = bcrypt.compare(password, admin.password);

  if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // Ensure the user is an admin
  if (!admin.isAdmin) {
    return res.status(401).json({ message: "User is not an admin" });
  }
  // Generate JWT token with a longer expiration time (e.g., 1 day)
  const token = jwt.sign({ adminId: admin._id }, process.env.JWT_SECRET, {
    expiresIn: "1d", // Token expires in 1 day
  });
  res.json({ token, isAdmin: true });
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
      `https://narayansewatrust.in/paymentsuccess?reference=${razorpay_payment_id}`
      // `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
    );
  } else {
    // If authentication fails, delete the document corresponding to the razorpay_order_id
    await Payment.findOneAndDelete({ order_id: razorpay_order_id });
    res.status(400).json({ success: false });
  }
});

// Protected route to fetch payments (requires authentication)
app.get("/admin/payments", authMiddleware, async (req, res) => {
  try {
    const payments = await Payment.find();
    res.status(200).json({ success: true, payments });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get("/api/getkey", async (req, res) => {
  return res.status(200).json({ key: process.env.KEY });
});

app.listen(8000, () => {
  console.log(`Server listening on port no 8000`);
});
