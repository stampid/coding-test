const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = Number(fs.readFileSync(filePath).toString());

let sum = 0;
let current = 0;

while (sum <= input) {
  current += 1;
  sum += current;
}

console.log(current - 1);
