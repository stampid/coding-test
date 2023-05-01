function solution(n, m, section) {
  /**
   * 1. 마지막으로 칠해진 위치를 저장할 변수 생성
   * 2. section을 반목문을 돌린다.
   * 3. 마지막으로 칠해진 위치와 section의 값을 비교
   * 4. section의 값이 크다면 answer의 값을 하나 올려준다.
   * 5. 그리고 마지막 위치를 바꿔준다
   * 6. -1 을 해주는 이유는 예를들어 m = 4; section의 위치가 2일 때  2 + 4 = 6이 되는데 2,3,4,5가 4칸을 칠하니까 -1 을 해준다.
   */
  let answer = 0;
  let last = 0;

  for (let i = 0; i < section.length; i += 1) {
    if (section[i] > last) {
      answer += 1;
      last = section[i] + m - 1;
    }
  }

  return answer;
}
