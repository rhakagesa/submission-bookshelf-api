import bookController from "../controller/book-controller.js";
const routes = [
  {
    method: "GET",
    path: "/books",
    handler: bookController.getBooksHandler,
  },
  {
    method: "GET",
    path: "/books/{bookId}",
    handler: bookController.getBookByIdHandler,
  },
  {
    method: "POST",
    path: "/books",
    handler: bookController.createBookHandler,
  },
  {
    method: "PUT",
    path: "/books/{bookId}",
    handler: bookController.updateBookByIdHandler,
  },
  {
    method: "DELETE",
    path: "/books/{bookId}",
    handler: bookController.deleteBookByIdHandler,
  },
];

export default routes;
