import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { v4 as uuidv4 } from "uuid";

const __filename = fileURLToPath(import.meta.url);
const p = path.join(path.dirname(__filename), "..", "data", "books.json");

class Book {
  constructor(name, author, page, price) {
    this.bookName = name;
    this.bookAuthor = author;
    this.bookPage = page;
    this.bookPrice = price;
  }

  save() {
    let books = [];
    fs.readFile(p, (err, content) => {
      if (!err) {
        books = JSON.parse(content);
      }
      books.push({
        id: uuidv4(),
        bookName: this.bookName,
        bookAuthor: this.bookAuthor,
        bookPage: this.bookPage,
        bookPrice: this.bookPrice,
      });
      fs.writeFile(p, JSON.stringify(books), (err) => console.log(err));
    });
  }
  static fetchAll(cb) {
    fs.readFile(p, (err, content) => {
      if (!err) {
        cb(JSON.parse(content));
      } else {
        cb([]);
      }
    });
  }

  static getById(id, cb) {
    fs.readFile(p, (err, content) => {
      if (!err) {
        let books = JSON.parse(content);
        const findBook = books.find((book) => book.id === id);
        cb(findBook);
      } else {
        console.log(err);
      }
    });
  }

  static getLimit(count, cb) {
    fs.readFile(p, (err, content) => {
      if (!err) {
        let books = JSON.parse(content);
        const limitBooks = books.slice(books.length - count, books.length)
        cb(limitBooks);
      } else {
        console.log(err);
      }
    });
  }
}

export default Book;
