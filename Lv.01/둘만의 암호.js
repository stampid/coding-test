function solution(s, skip, index) {
  /**
   * 1. 아스키 코드를 이용해서 범위를 탐색하기 위해 skip의 문자들을 아스키 코드를 키를 갖는 object로 만들어준다.
   * 2. s를 반복문을 돌린다.
   * 3. s의 문자를 아스키 코드로 변환한다.
   * 4. 변환한 아스키 코드를 index만큼 증가시키며 skipObj가 가지고 있는 것들과 비교해가며 진행한다.
   * 5. 인덱스만큼 아스키 코드가 모두 증가했다면 다시 문자로 변환 후 결과 값에 더 해준다
   */
  var answer = "";
  const skipObj = {};

  for (let i = 0; i < skip.length; i += 1) {
    skipObj[skip[i].charCodeAt()] = true;
  }

  for (let i = 0; i < s.length; i += 1) {
    let code = Number(s[i].charCodeAt());

    for (let j = 0; j < index; j += 1) {
      code += 1;
      if (code > 122) code = 97;
      if (skipObj[code] === true) {
        j -= 1;
        continue;
      }
    }
    answer += String.fromCharCode(code);
  }
  return answer;
}
