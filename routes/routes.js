// :::: import express ::::
import { Router } from "express";

// :::: controllers ::::
import { getHomePage } from "../controllers/books.js";

// :::: define express router ::::
const router = Router();

// :::: list of routes ::::
router.get("/", getHomePage);

export default router;
