import jsonServer from "json-server";
import { fileURLToPath } from "url";
import path from "path";

const server = jsonServer.create();
const router = jsonServer.router(
  path.join(path.dirname(fileURLToPath(import.meta.url)), "db.json")
);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

export default server;
