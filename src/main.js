import server from "./app/server.js";

const init = async () => {
  await server.start();
  console.log(`Server running on ${server.info.uri}`);
};

init();
