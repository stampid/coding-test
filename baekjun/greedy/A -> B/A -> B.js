const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();

let a = Number(input.split(" ")[0]);
let b = Number(input.split(" ")[1]);
let flag = false;
let result = 1;

while (a <= b) {
  if (a === b) {
    flag = true;
    break;
  }

  if (b % 2 === 0) b = b / 2;
  else if (b % 10 === 1) b = parseInt(b / 10);
  else break;

  result += 1;
}

if (!flag) result = -1;

console.log(result);
