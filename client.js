// establishes a connection with the game server
//IP: 165.227.47.243
// PORT: 50541
// local: 10.0.2.15:50541
const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: "50541",
    // host: "165.227.47.243",
  //   port: "50541",
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  // Receive from the server 
  conn.on("data", (data) => {
    console.log("--==[FROM SERVER]==--");
    console.log(data);
  });
  //  Print message after a connection is established
  conn.on("connect", () => {
    console.log("--==[Success]==-- Connected to snek server!");
    conn.write("Name: EK");
  });

  return conn;
};

module.exports = {
  connect,
};