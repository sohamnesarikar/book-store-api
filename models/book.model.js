import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Book title is required"],
      max: [100, "Book title can not be greater than 100 characters"],
      trim: true,
    },
    author: {
      type: String,
      required: [true, "Author is required"],
      trim: true,
    },
    publishedYear: {
      type: Number,
      required: [true, "Published year is required"],
      min: [1000, "Year must be at least 1000"],
      max: [new Date().getFullYear(), "Year must not be future"],
    },
  },
  { timestamps: true }
);

const Book = mongoose.model("Book", bookSchema);

export default Book;
