function solution(keymap, targets) {
  /**
   * 1. 타겟을 기준으로 반복문을 돌린다.
   * 2. 타겟과 키맵의 문자열을 비교하기 위해서 키맵을 반복문을 돌린다.
   * 3. 키맵의 있는 문자와 타겟이 가진 문자를 비교한다.
   * 4. 문자가 일치할 경우 인덱스 + 1을 미니멈 카운트와 비교한다.
   * 5. 미니멈 카운트보다 작다면 새로 갱신 후 뒤의 문자열들은 검사할 필요 없이 브레이크한다.
   * 6. 비교되는 문자가 없을 경우에는 -1을 넣어준 후 반복문 자체를 종료한다.
   * ps. 다중 포문을 사용 했는데 조금 더 가독성 좋고 쉽게 푸는 방법을 고민 해 봐야할 것 같다.
   */

  var answer = [];

  for (let i = 0; i < targets.length; i += 1) {
    let sumCount = 0;

    for (let j = 0; j < targets[i].length; j += 1) {
      let minimumCount = Number.MAX_SAFE_INTEGER;
      let emptyCheck = true;
      for (let k = 0; k < keymap.length; k += 1) {
        for (let l = 0; l < keymap[k].length; l += 1) {
          if (keymap[k][l] === targets[i][j]) {
            minimumCount = l + 1 < minimumCount ? l + 1 : minimumCount;
            emptyCheck = false;
            break;
          }
        }
      }
      if (emptyCheck) {
        sumCount = -1;
        break;
      } else {
        sumCount += minimumCount;
      }
    }
    answer.push(sumCount);
  }

  return answer;
}
