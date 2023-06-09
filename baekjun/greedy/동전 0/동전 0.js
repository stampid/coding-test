/**
 * 1. N개의 동전 종류들을 이용해 K가 만들어지는 최솟값을 구하는 문제
 * 2. 동전들 중 가장 큰 동전부터 k와 나누기를 해서 나온 값을 count에 더해준다. - k가 6000원일 경우 동전이 70000원 이면 k / 10000 = 0이 되고 나머지는 k를 그대로 가지게 된다. 동전이 5000원이라면  k / 5000 = 1이 되고 나머지는 1000원이 된다.
 * 3. 나머지를 k로 갱신 시켜주고 다음 동전과 비교하여 갯수를 구한다.
 *
 */

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let n = Number(input[0].split(" ")[0]);
let k = Number(input[0].split(" ")[1]);

let arr = [];
let count = 0;
for (let i = 1; i < input.length; i += 1) arr.push(Number(input[i]));

for (let i = n - 1; i > -1; i -= 1) {
  count += parseInt(k / arr[i]);
  k %= arr[i];
}

console.log(count);
