/**
 * 1. 테스트 케이스를 먼저 뽑아내야 한다.
 * 2. 첫번째 줄이 테스트 케이스의 수
 * 3. 그 다음 줄 부터 테스트케이스가 시작
 * 4. 반복문을 돌려 테스트 케이스의 수만큼 반복한다.
 * 5. n개의 사원들의 성적을 배열로 그룹핑한다.
 * 6. 시험 성적을 구하는거기 때문에 오름차순 정렬 후 하나씩 비교해가며 미니멈 등수보다 낮을 경우 카운트를 +1씩 해준다
 */

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const t = Number(input[0]);
let nLine = 1;

for (let i = 0; i < t; i += 1) {
  n = Number(input[nLine]);

  let arr = [];
  let count = 0;
  let minimum = 100001;
  for (let j = nLine + 1; j <= nLine + n; j += 1) {
    arr.push(input[j].split(" ").map((ele) => Number(ele)));
  }

  arr.sort((a, b) => a[0] - b[0]);
  for (let j = 0; j < arr.length; j += 1) {
    if (arr[j][1] < minimum) {
      count += 1;
      minimum = arr[j][1];
    }
  }

  console.log(count);
  nLine += n + 1;
}
