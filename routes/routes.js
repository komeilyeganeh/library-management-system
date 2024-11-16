// :::: import express ::::
import express from "express";

// :::: controllers ::::
import { getAddBookPage, postAddBook, getBooksPage, getDetailBook } from "../controllers/books.js";

// :::: define express router ::::
const router = express.Router();

// :::: list of routes ::::
router.get("/add-book", getAddBookPage);
router.post("/add-book", postAddBook);
router.get("/books", getBooksPage);
router.get("/book/:id", getDetailBook);

export default router;
