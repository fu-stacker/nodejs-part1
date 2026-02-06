// Global variables
console.log("Current directory:", __dirname);
console.log("Current file:", __filename);

// Creating custom global variable
global.myName = "Fuad";
console.log("My name:", myName);

// Importing hello module
const hello = require("./hello.js");

// Using module with direct function calls
hello.sayHi("Ms Abebe");
hello.sayHi(hello.myName);
console.log(hello.sum(9, 0));
hello.moduleHi();

// Using destructured imports
const { sayHi, sum, moduleHi, myName: friendName } = hello;
sayHi("Ms Abebe");
sayHi(friendName);
console.log(sum(9, 0));
moduleHi();
