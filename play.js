//main file through which you will launch the game client
const {connect} = require('./client');
const {setupInput} = require('./input');

console.log("Connecting ...");
let interact = connect();
setupInput(interact);