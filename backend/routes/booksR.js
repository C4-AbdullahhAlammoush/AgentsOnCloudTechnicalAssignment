const express = require("express");

const { addBooks, deleteBooks } = require("../controller/books");

const booksRouter = express.Router();
//main route is books
booksRouter.post("/add", addBooks);
booksRouter.delete("/delete/:id", deleteBooks);
module.exports = booksRouter;
