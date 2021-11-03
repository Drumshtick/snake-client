const { builtinModules } = require("module");
/*
"Move: up" - move up one square (unless facing down)
"Move: down" - move down one square (unless facing up)
"Move: left" - move left one square (unless facing right)
"Move: right" - move left one square (unless facing left)
*/

let connection;
// Handle exit key, otherwise stdin will never stop being captured
// Handle movement with 'wasd'
const handleUserInput = (key) => {
  if (key === '\u0003') {
    console.log("--==[Ctrl-C]==-- Exiting....");
    process.exit();
  } else if (key === 'w') {
    console.log("--==[Move: up]==--");
    connection.write("Move: up");
  } else if (key === 's') {
    console.log("--==[Move: down]==--");
    connection.write("Move: down");
  } else if (key === 'a') {
    console.log("--==[Move: left]==--");
    connection.write("Move: left");
  } else if (key === 'd') {
    console.log("--==[Move: right]==--");
    connection.write("Move: right");
  } else if (key === 't') {
    console.log("--==[TAUNT]==--");
    connection.write("Say: aye wil rok ewe");
  } else if (key === 'c') {
    console.log("--==[COMPLIMENT]==--");
    connection.write("Say: wowz gud moov");
  } else if (key === 'l') {
    console.log("--==[LOL]==--");
    connection.write("Say: MUWAHAHA");
  }
};  

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {
  setupInput
};