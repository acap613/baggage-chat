var io = require("socket.io-client"),
  ioClient = io.connect("http://localhost:3000");

ioClient.on("seq-num", function(msg) {
  console.info(msg);
});
