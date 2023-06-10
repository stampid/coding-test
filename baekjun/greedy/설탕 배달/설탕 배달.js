/**
 * 1. 3을 빼주면서 5로 정확히 나뉘어 떨어지는 시점을 구한다.
 * 2. while문을 통해 입력 값이 5로 정확히 나누어 떨어질 경우엔 나눈 몫을 출력한다.
 * 3. 5로 정확히 나누어 떨어지지 않는다면 입력 값에서 3씩 빼주면서 다시 5로 나누어지는지 확인하는 과정을 거친다.
 */

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = Number(fs.readFileSync(filePath).toString());

let result = 0;

while (input >= 0) {
  if (input === 0 || input % 5 === 0) {
    result += parseInt(input / 5);
    break;
  }

  input -= 3;
  result += 1;
}

if (input < 0) result = -1;

console.log(result);
