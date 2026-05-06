var fizzBuzz = function (n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    let toAdd = "";
    if (i % 3 === 0) {
      toAdd += "Fizz";
    }
    if (i % 5 === 0) {
      toAdd += "Buzz";
    }
    if (toAdd.length === 0) {
      toAdd = `${i}`;
    }
    answers.push(toAdd);
  }
  return answer;
};
