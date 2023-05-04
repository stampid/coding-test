function solution(t, p) {
  /**
   *   1. P의 길이를 따로 저장
   *   2. P를 숫자로 변환
   *   3. t를 반복문을 돌림
   *   4. 반복문을 돌리면서 p의 길이와 i를 더해서 잘라야될 범위를 구함.
   *   5. 문자열을 자르면서 숫자로 변환
   *   6. p와 값을 비교하여 answer의 값을 증가 시켜줌
   **/
  var answer = 0;
  const indexSkip = p.length;
  const numberP = Number(p);

  for (let i = 0; i < t.length; i += 1) {
    if (i + indexSkip - 1 >= t.length) break;
    const tSlice = Number(t.slice(i, i + indexSkip));
    if (tSlice <= numberP) answer += 1;
  }

  return answer;
}
