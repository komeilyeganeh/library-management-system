import Book from "../models/book.js";

export const getHomePage = (req, res, next) => {
  Book.getLimit(4, (books) => {
    res.render("home", {
      pageTitle: "Home Page",
      books
    });
  });
};

export const getAddBookPage = (req, res, next) => {
  res.render("add-book", {
    pageTitle: "Add Book Page",
  });
};

export const postAddBook = (req, res, next) => {
  const { bookName, bookAuthor, bookPrice, bookPages } = req.body;
  const book = new Book(bookName, bookAuthor, bookPages, bookPrice);
  book.save();
  res.redirect("/books");
};

export const getBooksPage = (req, res, next) => {
  Book.fetchAll((books) => {
    res.render("books", {
      pageTitle: "Books Page",
      books,
    });
  });
};

export const getDetailBook = (req, res, next) => {
  const { id } = req.params;
  Book.getById(id, (book) => {
    res.render("book", {
      pageTitle: `Book: ${book.bookName}`,
      book,
    });
  });
};
