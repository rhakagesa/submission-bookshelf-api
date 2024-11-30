import Hapi from "@hapi/hapi";

const PORT = process.env.PORT || 9000;
const HOST = process.env.HOST || "localhost";
const server = Hapi.server({ port: PORT, host: HOST });

export default server;
