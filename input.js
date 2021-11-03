const { builtinModules } = require("module");

// Handle exit key, otherwise stdin will never stop being captured
const handleUserInput = (key) => {
  if (key === '\u0003') {
    console.log("--==[Ctrl-C]==-- Exiting....");
    process.exit();
  }
};  

// setup interface to handle user input from stdin
const setupInput = function () {
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