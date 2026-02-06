// global variable __dirname This variable stores the path to the current working directory.
console.log(__dirname);
// global variable __filename This variable stores the path to the current working file.
console.log(__filename);

// creating own global variable with node js
global.mynamee = "fuad";
console.log(mynamee);

const hello = require("./hello.js");
// modules 1

// sayhi("fuad");
// sayhi("abdurehman");
// // modules 2

// console.log(add(1, 2));

hello.sayhi("ms abebe");
hello.sayhi(hello.myname);
console.log(hello.sum(9, 0));
hello.modulehi();
// simple use of object
let { sayhi, sum, modulehi, myname } = hello;
sayhi("ms abebe");
sayhi(myname);
console.log(sum(9, 0));
modulehi();
