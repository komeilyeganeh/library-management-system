// :::: import express, path and url ::::
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import bodyParser from "body-parser";
import { getHomePage } from "./controllers/books.js";

// :::: import routes ::::
import router from "./routes/routes.js";

// :::: create express app ::::
const app = express();
const __filename = fileURLToPath(import.meta.url)
app.use(express.static(path.join(path.dirname(__filename), "public")));
app.use(bodyParser.urlencoded({ extended: false }))

// :::: set view engine ::::
app.set("view engine", "ejs");
app.set("views", "views");

// :::: routes ::::
app.use(router);
app.get("/", getHomePage);

// :::: required port to listening ::::
app.listen(4000);
