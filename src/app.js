import express from "express";
import dotenv from "dotenv";
import errorMiddleware from "./middlewares/error.js";

const app = express();
dotenv.config({ path: `.env` });
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

import author from "./routes/author.routes.js";
import book from "./routes/book.routes.js";

const routePrefix = "/api/v1";
app.use(routePrefix, author);
app.use(routePrefix, book);

app.use(errorMiddleware);

export default app;
