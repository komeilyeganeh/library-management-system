// :::: import express ::::
import express from "express";

// :::: controllers ::::
import { getAddBookPage, postAddBook } from "../controllers/books.js";

// :::: define express router ::::
const router = express.Router();

// :::: list of routes ::::
router.get("/add-book", getAddBookPage);
router.post("/add-book", postAddBook);

export default router;
