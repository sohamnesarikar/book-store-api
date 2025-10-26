import Book from "../models/book.model.js";

export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    if (books?.length > 0) {
      res.status(200).json({
        success: true,
        message: "List of all books",
        data: books,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "books not found",
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong, please try again",
      error: err,
    });
  }
};

export const getBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book is not found with this id, please try with different id",
      });
    }
    res.status(200).json({ success: true, data: book });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong, please try again",
      error: err,
    });
  }
};

export const createBook = async (req, res) => {
  try {
    const { title, author, publishedYear } = req.body;
    const newBook = await Book.create({
      title,
      author,
      publishedYear,
    });

    if (!newBook) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    res.status(201).json({
      success: true,
      message: "book created successfully",
      data: newBook,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong, please try again",
      error: err,
    });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).json({
        success: false,
        message: "Book is not found with this id, please try with different id",
      });
    }
    res.status(200).json({
      success: true,
      message: "book deleted successfully",
      data: deletedBook,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong, please try again",
      error: err,
    });
  }
};

export const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const updatedBook = await Book.findByIdAndUpdate(id, body, {
      new: true,
    });
    if (!updatedBook) {
      return res.status(404).json({
        success: false,
        message: "Book is not found with this id, please try with different id",
      });
    }
    res.status(200).json({
      success: true,
      message: "book updated successfully",
      data: updatedBook,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong, please try again",
      error: err,
    });
  }
};
