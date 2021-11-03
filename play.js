//main file through which you will launch the game client
//IP: 165.227.47.243
// PORT: 50541
// local: 10.0.2.15:50541
const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: "50541",
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(data);
  });
  return conn;
};

console.log("Connecting ...");
connect();

