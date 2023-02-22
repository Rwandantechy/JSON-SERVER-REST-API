const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("myData.json");
var cors = require("cors");

server.use(cors());
server.use(router);
server.listen(8080, () => {
  console.log("Server is up and running on port 8080");
});
