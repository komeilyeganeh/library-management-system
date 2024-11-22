import { Book } from "../models/book.js";

export const getHomePage = (req, res, next) => {
  Book.findAll({
    limit: 4,
    order: [
      ['id', 'DESC']
    ]
  }).then(books => {
    res.render("home", {
      pageTitle: "Home Page",
      books,
    });
  }).catch(err => {
    console.log(err);
  });
};

export const getAddBookPage = (req, res, next) => {
  res.render("add-book", {
    pageTitle: "Add Book Page",
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
    .catch((err) => {
      console.log(err);
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
