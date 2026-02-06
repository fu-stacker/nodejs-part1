function moduleGreeting() {
  console.log("Hello! This is the modules course part 1.");
}

function sayHi(name) {
  console.log(`Hello, ${name}!`);
}

function add(a, b) {
  return a + b;
}

module.exports = {
  myName: "Fuad",
  sayHi,
  sum: add,
  moduleHi: moduleGreeting,
};
