import mongoose from "mongoose";

// User Schema
const userSchema = new mongoose.Schema({
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: String
});

export default mongoose.model("User", userSchema);