import mongoose from "mongoose";

// Book Schema
const bookSchema = new mongoose.Schema({
    title: {    
        type: String,
        unique: false,
        required: true
    },
    author: {
        type: String,
        unique: false,
        required: true
    },
    image: {
        type: String,
        unique: false,
        required: true
    },
    genre: {
      type: String,
      unique: false,
      required: true,
    },
    pace: {
        type: String,
        unique: false,
        required: true
    },
    complexity: {
        type: String,
        unique: false,
        required: true
    }
});

export default mongoose.model("Book", bookSchema);