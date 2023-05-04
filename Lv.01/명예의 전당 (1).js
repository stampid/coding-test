function solution(k, score) {
  /**
   * 1. 명예의 전당용 배열을 생성한다.
   * 2. 최하위 랭크를 변수로 만들어 놓는다.
   * 3. score를 반목문을 돌린다.
   * 4. 명예의 전당에 점수를 푸쉬한다.
   * 5. 명예의 전당을 정렬 시킨다.
   * 6. 명예의 전당의 길이가 등수보다 작거나 같을 경우 가장 하위 점수를 결과에 푸쉬한다.
   * 7. 아닐 경우 등수에 맞는 점수를 결과에 푸쉬한다.
   * ps. 정렬 시 길이가 길어질 수록 정렬하는데 시간이 오래 걸리니 등수보다 커지면 하위 점수를 날려버리도록 한다.
   */
  var answer = [];
  const hallOfFame = [];
  const rank = k - 1;

  /** @description 수정 전 코드 */
  for (let i = 0; i < score.length; i += 1) {
    hallOfFame.push(score[i]);
    hallOfFame.sort((a, b) => b - a);
    if (hallOfFame.length <= k) answer.push(hallOfFame[hallOfFame.length - 1]);
    else answer.push(hallOfFame[rank]);
  }

  /** @description 수정 후 코드 */
  for (let i = 0; i < score.length; i += 1) {
    hallOfFame.push(score[i]);
    hallOfFame.sort((a, b) => b - a);
    if (hallOfFame.length <= k) answer.push(hallOfFame[hallOfFame.length - 1]);
    else {
      hallOfFame.pop();
      answer.push(hallOfFame[rank]);
    }
  }

  return answer;
}
