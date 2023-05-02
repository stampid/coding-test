function solution(cards1, cards2, goal) {
  /**
   * 1. goal을 기준으로 반복문을 돌린다.
   * 2. goal의 i번째와 cards1[0], cards2[0]를 각각 비교한다.
   * 3. 같을 경우 answer를 yes로 바꿔주고 continue한다. 그리고 비교했던 맨 앞의 배열 요소를 제거해준다.
   * 4. 하나라도 answer가 no가 되면 반복문을 아예 종료하고 결과를 반환한다.
   */
  var answer = "";

  for (let i = 0; i < goal.length; i += 1) {
    answer = "No";
    if (goal[i] === cards1[0]) {
      answer = "Yes";
      cards1.shift();
      continue;
    }

    if (goal[i] == cards2[0]) {
      answer = "Yes";
      cards2.shift();
      continue;
    }

    if (answer === "No") break;
  }

  return answer;
}
