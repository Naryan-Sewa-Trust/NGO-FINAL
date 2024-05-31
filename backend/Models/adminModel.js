// models/Admin.js
import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String,
  isAdmin: { type: Boolean, default: false },
});

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;
