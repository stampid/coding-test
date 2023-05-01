function solution(wallpaper) {
  /**
   * 1. 최소 가로,세로 좌표 / 최대 가로, 세로 좌표를 지정
   * 2. wallpaper 안에 있는 #을 찾기 위해 이중 for문을 돌림
   * 3. #일 경우 최소, 최대 좌표 값과 비교하여 값을 교체 해줌
   * 4. 마지막 최대 가로, 세로 좌표의 +1은 드래그를 끝까지 지정해야해서 해줌
   */
  let answer = [];
  let vMin = 50;
  let hMin = 50;
  let vMax = 0;
  let hMax = 0;

  for (let i = 0; i < wallpaper.length; i += 1) {
    for (let j = 0; j < wallpaper[i].length; j += 1) {
      if (wallpaper[i][j] === "#") {
        vMin = vMin > i ? i : vMin;
        hMin = hMin > j ? j : hMin;
        vMax = vMax < i ? i : vMax;
        hMax = hMax < j ? j : hMax;
      }
    }
  }

  answer = [vMin, hMin, vMax + 1, hMax + 1];
  return answer;
}
