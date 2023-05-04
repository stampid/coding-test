function solution(s) {
  /**
   * 1. 문자의 인덱스를 저장할 객체를 생성한다.
   * 2. s를 반복문을 돌린다.
   * 3. 객체에 키가 없을 경우 문자를 키로 값은 인덱스로 저장하고 결과에 -1을 푸쉬한다.
   * 4. 있을 경우엔 현재 인덱스와 저장되어 있는 인덱스를 뺀 값을 푸쉬한다.
   * 5. 객체에 새로운 인덱스를 저장한다.
   */
  var answer = [];
  const charSet = {};

  for (let i = 0; i < s.length; i += 1) {
    if (charSet[s[i]] === undefined) {
      charSet[s[i]] = i;
      answer.push(-1);
    } else {
      answer.push(i - charSet[s[i]]);
      charSet[s[i]] = i;
    }
  }

  return answer;
}
