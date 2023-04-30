function solution(park, routes) {
  /**
   * 1. 공원의 지도를 만든다.
   * 2. 시작 위치를 저장한다.
   * 3. 경로 명령을 반복문을 돌린다.
   * 4. 명령에 따라 분기를 통해 이동을 시작한다.
   * 5. 먼저 이동했을 시에 위치를 확인해 최대 길이/최소 길이를 넘어 갈 경우 명령을 무시한다.
   * 6. 이동 경로에 장애물이 있을 경우에는 이동하지 않는다.
   * 7. 이동을 했을 때 문제가 없다면 경로 명령에 따라 현재 위치를 저장한다.
   */
  const { map, startPoint } = createMap(park);
  let answer = startPoint;

  for (let i = 0; i < routes.length; i += 1) {
    let movePoint = Number(routes[i][2]);
    let obstacleCheck = false;
    if (routes[i][0] === "E") {
      if (answer[1] + movePoint > map[answer[0]].length - 1) continue;
      for (let j = answer[1]; j <= answer[1] + movePoint; j += 1)
        if (map[answer[0]][j][2] === "X") {
          obstacleCheck = true;
          break;
        }
      if (!obstacleCheck) answer[1] += movePoint;
    } else if (routes[i][0] === "W") {
      if (answer[1] - movePoint < 0) continue;
      for (let j = answer[1]; j >= answer[1] - movePoint; j -= 1)
        if (map[answer[0]][j][2] === "X") {
          obstacleCheck = true;
          break;
        }
      if (!obstacleCheck) answer[1] -= movePoint;
    } else if (routes[i][0] === "N") {
      if (answer[0] - movePoint < 0) continue;

      for (let j = answer[0]; j >= answer[0] - movePoint; j -= 1) {
        if (map[j][answer[1]][2] === "X") {
          obstacleCheck = true;
          break;
        }
      }

      if (!obstacleCheck) answer[0] -= movePoint;
    } else if (routes[i][0] === "S") {
      if (answer[0] + movePoint > map.length - 1) continue;

      for (let j = answer[0]; j <= answer[0] + movePoint; j += 1) {
        if (map[j][answer[1]][2] === "X") {
          obstacleCheck = true;
          break;
        }
      }

      if (!obstacleCheck) answer[0] += movePoint;
    }
  }

  return answer;
}

function createMap(park) {
  const answer = {
    map: [],
    startPoint: [0, 0],
  };

  for (let i = 0; i < park.length; i += 1) {
    const tempMapArray = [];
    for (let j = 0; j < park[i].length; j += 1) {
      if (park[i][j] === "S") answer["startPoint"] = [i, j];
      tempMapArray.push([i, j, park[i][j]]);
    }
    answer["map"].push(tempMapArray);
  }

  return answer;
}
