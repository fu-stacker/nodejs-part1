// import fs from "fs";
const fs = require("fs");

// console.log(fs); //

// fs.mkdir("./myfirstfolder", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(`folder is created succesfully.`);
//   }
// }); //  .mdkir("foldername",function)--> is use to create a folder.

data = `this is my first text.txt`;
data2 = `this is my second text`;
// fs.writeFile("./myfirstfolder/mytext.txt", data, (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   } else {
//     console.log(`text is written succesfully.`);
//   }
// });

// .writeFile("the path where to write", the data what to write, callbackfunction)
// -- > use to write in file by replacing the exisiting file
// and if there isn't a file it create by it self if there is erase the existing and replace the data
// to append data at the last without replaceing we use an object {flag:'a'} as a third parametr.

// example below

// fs.writeFile("./myfirstfolder/mytext.txt", data2, { flag: "a" }, (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   } else {
//     console.log(`text2 is written succesfully.`);
//   }
// });

//
fs.readFile(
  "./myfirstfolder/mytext.txt",
  { encoding: "utf-8" },
  (err, data) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("date read succesfully");
      console.log(data);
    }
  },
);
