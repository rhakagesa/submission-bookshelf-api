import Hapi from "@hapi/hapi";
import bookRoute from "../routes/book-route.js";

const PORT = process.env.PORT || 9000;
const HOST = process.env.HOST || "localhost";
const server = Hapi.server({ port: PORT, host: HOST });

server.route(bookRoute);

export default server;
