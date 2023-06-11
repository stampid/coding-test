/**
 * 1. 각 도시에서 이동할 때 가장 최소 비용을 구하는 문제
 * 2. 최소 주유소 값을 구한다.
 * 3. 위치를 이동할 때마다 현재 위치가 최소 주유소 값일 경우 남아 있는 모든 거리만큼 기름을 구매한다.
 */

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let n = Number(input[0]); //도시의 개수
let cityLength = input[1].split(" ").map((ele) => Number(ele));
let pay = input[2].split(" ").map((ele) => Number(ele));
let minimumPay = Math.min(...pay.slice(0, pay.length - 1));
let movingPoint = 0;
let result = 0;

while (movingPoint <= n - 1) {
  if (minimumPay >= pay[movingPoint]) {
    result += cityLength.slice(movingPoint).reduce((acc, current) => {
      return acc + current * pay[movingPoint];
    }, 0);

    break;
  } else {
    result += cityLength[movingPoint] * pay[movingPoint];
  }

  movingPoint += 1;
}

console.log(result);
