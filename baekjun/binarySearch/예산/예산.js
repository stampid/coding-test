const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map((ele) => Number(ele));
let m = Number(input[2]);

let start = 1;
let end = arr.reduce((a, b) => Math.max(a, b));
let result = 0;

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;

  for (let x of arr) {
    total += Math.min(mid, x);
  }

  if (total <= m) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(result);
