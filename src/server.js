import server from "./app/web.js";

const init = async () => {
  await server.start();
  console.log(`Server running on ${server.info.uri}`);
};

init();

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});
