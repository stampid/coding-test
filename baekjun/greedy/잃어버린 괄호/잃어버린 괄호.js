/**
 * 1. 괄호를 쳤을 때 최소값을 구하는 문제
 * 2. 마이너스를 기준으로 그룹핑을 한다.
 * 3. 마이너스 그룹을 반복문을 돌면서 그룹핑된 요소들을 더해준다.
 * 4. 첫번째 마이너 그룹은 더해주고 이후 그룹들은 결과값에 마이너스를 시켜준다.
 */

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n")[0];

let minusGroups = input.split("-");
let result = 0;

for (let i = 0; i < minusGroups.length; i += 1) {
  let sum = 0;
  const splitGroup = minusGroups[i].split("+");
  for (let j = 0; j < splitGroup.length; j += 1) {
    sum += Number(splitGroup[j]);
  }

  if (i === 0) result += sum;
  else result -= sum;
}

console.log(result);
