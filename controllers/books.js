import Book from "../models/book.js";

export const getHomePage = (req, res, next) => {
  res.render("home", {
    pageTitle: "Home Page",
  });
};

export const getAddBookPage = (req, res, next) => {
  res.render("add-book", {
    pageTitle: "Add Book Page",
  });
};

export const postAddBook = (req, res, next) => {
  const { bookName, bookAuthor, bookPrice, bookPage } = req.body;
  const book = new Book(bookName, bookAuthor, bookPage, bookPrice);
  book.save((books) => {
    res.render("books", {
        pageTitle: "Books Page",
        data: books
    });
    res.redirect("/");
  });
};
