console.log(`my first module`);
let y;
const mymultiplier = (x) => (y = x * 2);
mymultiplier(4);
console.log(y);

moduleHi.exports = mymultiplier;
