function solution(number, limit, power) {
  var answer = 0;
  const temp = [];

  for (let i = 1; i <= number; i += 1) {
    let count = 0;
    for (let j = 1; j * j <= i; j += 1) {
      if (j * j === i) count += 1;
      else if (i % j === 0) count += 2;
    }
    temp.push(count);
  }

  for (let i = 0; i < temp.length; i += 1) {
    if (temp[i] <= limit) {
      answer += temp[i];
    } else {
      answer += power;
    }
  }

  return answer;
}
