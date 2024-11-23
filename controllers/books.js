import { Book } from "../models/book.js";

export const getHomePage = (req, res, next) => {
  Book.findAll({
    limit: 4,
    order: [["id", "DESC"]],
  })
    .then((books) => {
      res.render("home", {
        pageTitle: "Home Page",
        books,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getAddBookPage = (req, res, next) => {
  res.render("add-book", {
    pageTitle: "Add Book Page",
    error: "",
  });
};

export const postAddBook = (req, res, next) => {
  const { bookName, bookAuthor, bookPrice, bookPages } = req.body;
  Book.create({
    title: bookName,
    authorName: bookAuthor,
    price: bookPrice,
    pages: bookPages,
  })
    .then(() => {
      res.redirect("/books");
    })
    .catch(() => {
      res.render("add-book", {
        pageTitle: "Add Book Page",
        error: "All fields are required!",
      });
    });
};

export const getBooksPage = (req, res, next) => {
  Book.findAll()
    .then((books) => {
      res.render("books", {
        pageTitle: "Books Page",
        books,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getDetailBook = (req, res, next) => {
  const { id } = req.params;
  Book.findByPk(id)
    .then((book) => {
      res.render("book", {
        pageTitle: `Book: ${book.title}`,
        book,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getEditBook = (req, res, next) => {
  const { id } = req.params;
  Book.findByPk(id)
    .then((book) => {
      res.render("edit-book", {
        pageTitle: "Edit Book",
        book,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const editBook = (req, res, next) => {
  const { bookName, bookAuthor, bookPrice, bookPages } = req.body;
  const id = req.body.bookId;
  Book.findByPk(id)
    .then((book) => {
      book.title = bookName;
      book.authorName = bookAuthor;
      book.price = bookPrice;
      book.pages = bookPages;
      book.save();
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect("/books");
};

export const deleteBook = (req, res, next) => {
  const id = req.body.bookId;
  Book.destroy({
    where: {
      id,
    },
  })
    .then()
    .catch((err) => {
      console.log(err);
    });
  res.redirect("/books");
};
