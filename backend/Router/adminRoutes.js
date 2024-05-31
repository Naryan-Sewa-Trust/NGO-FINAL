// routes/adminRoutes.js
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Admin from "../Models/adminModel.js";
import Payment from "../Models/paymentModel.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

// Registration endpoint
router.post("/register", async (req, res) => {
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
router.put("/profile", authMiddleware, async (req, res) => {
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
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  // Find admin by username
  const admin = await Admin.findOne({ username });

  if (!admin) {
    return res.status(404).json({ message: "Admin not found" });
  }

  // Compare passwords
  const isMatch = await bcrypt.compare(password, admin.password);

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

// Protected route to fetch payments (requires authentication)
router.get("/payments", authMiddleware, async (req, res) => {
  try {
    const payments = await Payment.find();
    res.status(200).json({ success: true, payments });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
