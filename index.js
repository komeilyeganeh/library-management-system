// :::: import express, path and url ::::
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// :::: import routes ::::
import router from "./routes/routes.js";

// :::: create express app ::::
const app = express();
const __filename = fileURLToPath(import.meta.url)
app.use(express.static(path.join(path.dirname(__filename), "public")));

// :::: set view engine ::::
app.set("view engine", "ejs");
app.set("views", "views");

// :::: routes ::::
app.use(router);

// :::: required port to listening ::::
app.listen(4000);
