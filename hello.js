function modul() {
  console.log("hello every one this is mudules course part 1.");
}

function sayhi(name) {
  console.log(`hello ${name}`);
}

// module.exports = sayhi;

function add(a, b) {
  return a + b;
}

// module.exports = add;

// in the above code i write 2 function and export 2 times and this will no longer use full and
// happens error so lets ecport by object

module.exports = {
  myname: "fuad",
  sayhi: sayhi,
  sum: add,
  modulehi: modul,
};
