/**
 * 1. 인출하는데 걸리는 최소 시간 합을 구하는 문제
 * 2. 인출하는데 걸리는 시간을 오름차순으로 정렬 후
 * 3. 합계를 구한다.
 */

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let n = Number(input[0]); // 사람의 수;
let p = input[1].split(" ").map((ele) => Number(ele)); // 인출하는데 걸리는 시간;
let result = 0;
let sum = 0;

p.sort((a, b) => a - b);

for (let i = 0; i < p.length; i += 1) {
  sum += p[i];
  result += sum;
}

console.log(result);
