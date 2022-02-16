const http = require("http");
const websocket = require("ws");

const server = http.createServer((req, res) => {
  res.end("I am connected");
});
const wss = new websocket.Server({ server });

wss.on("headers", (headers, req) => {
  console.log({ headers });
});

//Event: 'connection'
wss.on("connection", (ws, req) => {
  ws.send("This is a message from server, connection is established");
  //receive the message from client on Event: 'message'
  // ws.on("message", (msg) => {
  //   console.log("vvvv", msg.toString());
  // });
  ws.on("message", function message(data) {
    console.log("received: %s", data);
    if (data == "clock") {
      ws.send("bylo klikniecie");
    }
    //ws.send("something");
  });
  ws.on("dupa", (d) => {
    console.log({ d });
  });
});

server.listen(8000);
