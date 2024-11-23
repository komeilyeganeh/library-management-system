// :::: import express ::::
import express from "express";

// :::: controllers ::::
import {
  getAddBookPage,
  postAddBook,
  getBooksPage,
  getDetailBook,
  getEditBook,
  editBook,
  deleteBook
} from "../controllers/books.js";

// :::: define express router ::::
const router = express.Router();

// :::: list of routes ::::
router.get("/add-book", getAddBookPage);
router.post("/add-book", postAddBook);
router.get("/books", getBooksPage);
router.get("/book/:id", getDetailBook);
router.get("/book/edit/:id", getEditBook);
router.post("/edit-book", editBook);
router.post("/delete-book", deleteBook);

export default router;
