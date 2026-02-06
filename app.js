// global variable __dirname This variable stores the path to the current working directory.
console.log(__dirname);
// global variable __filename This variable stores the path to the current working file.
console.log(__filename);

// creating own global variable with node js
global.myname = "fuad";
console.log(myname);

// modules 1
const sayhi = require("./hello.js");
sayhi("fuad");
sayhi("abdurehman");
// modules 2
const add = require("./hello.js");
console.log(add(1, 2));
