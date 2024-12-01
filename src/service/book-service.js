import { nanoid } from "nanoid";
import books from "../app/database.js";
import ResponseError from "../error-handler/response-error.js";
import Book from "../model/book.js";
import {
  createBookValidation,
  updateBookValidation,
} from "../validation/book-validation.js";

const getBooks = () => {
  return { books: books };
};

const getBookById = (id) => {
  const book = books.find((book) => book.id === id.bookId);
  if (!book) {
    throw new ResponseError("fail", 404, "Buku tidak ditemukan");
  }

  return { book: book };
};

const createBook = (data) => {
  const validation = createBookValidation(data);

  if (validation) {
    throw validation;
  }

  const book = new Book(
    nanoid(8),
    data.name,
    data.year,
    data.author,
    data.summary,
    data.publisher,
    data.pageCount,
    data.readPage,
    data.pageCount === data.readPage,
    data.reading,
    new Date().toISOString(),
    new Date().toISOString()
  );

  books.push(book);

  return { bookId: book.id };
};

const updateBookById = (id, data) => {
  const book = books.find((book) => book.id === id.bookId);
  if (!book) {
    throw new ResponseError(
      "fail",
      404,
      "Gagal memperbarui buku. Id tidak ditemukan"
    );
  }

  const validation = updateBookValidation(data);

  if (validation) {
    throw validation;
  }

  book.name = data.name;
  book.year = data.year;
  book.author = data.author;
  book.summary = data.summary;
  book.publisher = data.publisher;
  book.pageCount = data.pageCount;
  book.readPage = data.readPage;
  book.finished = data.pageCount === data.readPage;
  book.reading = data.reading;
  book.updatedAt = new Date().toISOString();

  return true;
};

const deleteBookById = (id) => {
  const book = books.find((book) => book.id === id.bookId);
  if (!book) {
    throw new ResponseError(
      "fail",
      404,
      "Buku gagal dihapus. Id tidak ditemukan"
    );
  }

  books.splice(books.indexOf(book), 1);

  return true;
};

export default {
  getBooks,
  getBookById,
  createBook,
  updateBookById,
  deleteBookById,
};
