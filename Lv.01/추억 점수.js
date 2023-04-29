function solution(name, yearning, photo) {
  /**
   * 1. 이름을 키로 값을 점수를 가지는 객체를 먼저 생성해준다.
   * 2. photo가 각각 사진의 인물들의 이름이 2차원 배열 형태로 감싸져 있기때문에 2중 for문을 돌린다.
   * 3. for문 안에서 score 객체에서 이름을 확인해 있다면 점수를 합산 없다면 넘어간다.
   * 4. 합산된 결과 배열에 푸쉬 해준다.
   */
  var answer = [];
  const score = {};

  for (let i = 0; i < name.length; i += 1) {
    score[name[i]] = yearning[i];
  }

  for (let i = 0; i < photo.length; i += 1) {
    let sumScore = 0;
    for (let j = 0; j < photo[i].length; j += 1) {
      if (score[photo[i][j]] !== undefined) sumScore += score[photo[i][j]];
    }

    answer.push(sumScore);
  }

  return answer;
}
