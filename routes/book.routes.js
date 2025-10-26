import express from "express";
import {
  createBook,
  deleteBook,
  getAllBooks,
  getBook,
  updateBook,
} from "../controllers/book.controller.js";

const router = express.Router();

// get all books
router.get("/", getAllBooks);

// get book
router.get("/:id", getBook);

// create book
router.post("/", createBook);

// delete book
router.delete("/:id", deleteBook);

// edit book
router.put("/:id", updateBook);

export default router;
