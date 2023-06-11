/**
 * 1. 회의시간이 겹치지 않고 사용 가능한 회의의 최대 수를 구하는 문제
 * 2. 회의 목록을 오름 차순으로 정렬한다. - 정렬은 우선적으로 종료시점을 기준으로 종료시점이 같다면 시작시점을 기준으로 정렬한다.
 * 3. 반복문을 돌면서 이전 희의의 끝나는 시간과 지금 회의의 시작 시간을 비교하여 회의실 사용이 가능한지 판별한다.
 * 4. 결과 값을 하나씩 올려준다.
 */

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let n = Number(input[0]); // 회의의 수
let meetingList = [];
let currentMeeting = null;
let result = 0;

for (let i = 1; i <= n; i += 1)
  meetingList.push(input[i].split(" ").map((ele) => Number(ele)));

meetingList.sort((a, b) => {
  if (a[1] !== b[1]) return a[1] - b[1];
  else return a[0] - b[0];
});

for (let i = 0; i < meetingList.length; i += 1) {
  if (i === 0) {
    currentMeeting = meetingList[i];
    result += 1;
  } else if (currentMeeting[1] <= meetingList[i][0]) {
    currentMeeting = meetingList[i];
    result += 1;
  }
}

console.log(result);
