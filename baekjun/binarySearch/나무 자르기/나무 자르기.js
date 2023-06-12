/**
 * 1. 나무를 최소한으로 잘라가는 문제
 * 2. start = 1로 잡고 end는 나무 길이 중 가장 긴 나무를 기준으로 잡는다.
 * 3. 반복문을 돌면서 mid 값을 구하고 나무 길이 - mid 값을 더해 total 값을 구한다.
 * 4. total 값이 m보다 작을 경우 start를 mid + 1 로 잡아서 줘서 다시 반복문이 돌아간다.
 * 5. 클 경우 end 값을 mid - 1로 변경해서 반복문이 돌아간다.
 */

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

let n = Number(input[0].split(" ")[0]); // 나무의 수
let m = Number(input[0].split(" ")[1]); // 가져갈 나무의 길이
let treeList = input[1].split(" ").map(Number); // 나무 목록

let start = 1;
let end = treeList.reduce((a, b) => Math.max(a, b));
let result = 0;

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;

  for (x of treeList) {
    if (x - mid >= 0) {
      total += x - mid;
    }
  }

  if (total >= m) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(result);
