/**
 * 1. 특정 랜선의 수를 얻기 위한 잘랐을 때의 최대 길이를 구하는 문제
 * 2. 랜선들 중 가장 긴 랜선을 구한다.
 * 3. 반복문을 돌면서 mid 값을 구하고
 * 4. mid 값과 랜선 길이를 나누어서 랜선 수의 합을 구한다.
 * 5. 랜선 수의 합이 필요한 랜선 수보다 클 경우 자르는 길이를 늘려나간다.
 * 6. 랜런 수의 합이 필요한 랜선 수보다 작을 경우 길이를 줄여나간다.
 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

let k = Number(input[0].split(" ")[0]); // 가지고 있는 랜선의 수
let n = Number(input[0].split(" ")[1]); // 필요한 랜선의 수
let lanList = [];

for (let i = 1; i <= k; i += 1) lanList.push(Number(input[i]));

let start = 1;
let end = lanList.reduce((a, b) => Math.max(a, b));
let result = 0;

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;

  for (let x of lanList) {
    total += parseInt(x / mid);
  }

  if (total >= n) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}
console.log(result);
