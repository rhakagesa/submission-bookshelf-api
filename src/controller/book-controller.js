import bookService from "../service/book-service.js";

const getBooksHandler = (request, h) => {
  try {
    const result = bookService.getBooks();
    return h.response({ status: "success", data: result }).code(200);
  } catch (e) {
    return h.response({ status: e.status, message: e.message }).code(e.code);
  }
};

const getBookByIdHandler = (request, h) => {
  try {
    const result = bookService.getBookById(request.params);
    return h.response({ status: "success", data: result }).code(200);
  } catch (e) {
    return h.response({ status: e.status, message: e.message }).code(e.code);
  }
};

const createBookHandler = (request, h) => {
  try {
    const result = bookService.createBook(request.payload);
    return h
      .response({
        status: "success",
        message: "Buku berhasil ditambahkan",
        data: result,
      })
      .code(201);
  } catch (e) {
    return h.response({ status: e.status, message: e.message }).code(e.code);
  }
};

const updateBookByIdHandler = (request, h) => {
  try {
    const result = bookService.updateBookById(request.params, request.payload);

    if (result)
      return h
        .response({
          status: "success",
          message: "Buku berhasil diperbarui",
        })
        .code(200);
  } catch (e) {
    return h.response({ status: e.status, message: e.message }).code(e.code);
  }
};

const deleteBookByIdHandler = (request, h) => {
  try {
    const result = bookService.deleteBookById(request.params);

    if (result)
      return h
        .response({
          status: "success",
          message: "Buku berhasil dihapus",
        })
        .code(200);
  } catch (e) {
    return h.response({ status: e.status, message: e.message }).code(e.code);
  }
};

export default {
  getBooksHandler,
  getBookByIdHandler,
  createBookHandler,
  updateBookByIdHandler,
  deleteBookByIdHandler,
};
