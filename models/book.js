import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const p = path.join(path.dirname(__filename), "data", "books.json");

class Book {
  constructor(name, author, page, price) {
    this.bookName = name;
    this.bookAuthor = author;
    this.bookPage = page;
    this.bookPrice = price;
  }

  save(cb) {
    let products = [];
    fs.readFile(p, (err, content) => {
      if (err) {
        cb([]);
      } else {
        cb(JSON.parse(content));
      }
      products.push(this)
      fs.writeFile(p, JSON.stringify(products))
    });
  }
}

export default Book;
