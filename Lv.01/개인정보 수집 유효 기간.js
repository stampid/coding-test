function solution(today, terms, privacies) {
  /**
   * 1. today의 값과 privacies의 값의 차를 구하기 위해 숫자로 변환하는 작업을 진행한다.
   * 2. privacies를 반목문을 돌려서 확인한다.
   * 3. today와 개인정보 수집 날짜의 차를 구한다.
   * 4. 각각 년도의 차이 => 일의 차이 / 월의 차이 => 일의 차이로 변환하는 과정을 거치고 누적값을 더해준다.
   * 5. 한달이 28일이라는 기준이 있어서 일의 차이 누적값/28을 통해 개인정보 유효기간이 지났는지 확인한다.
   * 6. 유효기간이 지났다면 결과값에 푸쉬한다.
   */
  var answer = [];
  const termsObj = {};
  const todayMap = today.split(".").map((e) => Number(e));

  for (let i = 0; i < terms.length; i += 1) {
    const termsArr = terms[i].split(" ");
    termsObj[termsArr[0]] = Number(termsArr[1]);
  }

  for (let i = 0; i < privacies.length; i += 1) {
    const privaciesArr = privacies[i].split(" ");
    const privaciesMap = privaciesArr[0].split(".").map((e) => Number(e));
    const minusMap = todayMap.map((e, index) => e - privaciesMap[index]);
    const minusDay = minusMap.reduce((acc, day, index) => {
      switch (index) {
        case 0:
          acc += day * 28 * 12;
          break;
        case 1:
          acc += day * 28;
          break;
        case 2:
          acc += day;
          break;
        default:
          acc += 0;
          break;
      }
      return acc;
    }, 0);
    if (minusDay <= 0) continue;
    if (minusDay / 28 >= termsObj[privaciesArr[1]]) answer.push(i + 1);
  }
  return answer;
}
