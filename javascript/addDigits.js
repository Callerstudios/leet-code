var addDigits = function (num) {
  var getSum = (num) => {
    let stringRep = String(num);
    let sum = 0;
    for (let i = 0; i < stringRep.length; i++) {
      sum += Number(stringRep[i]);
    }
    return sum;
  };
  let s = String(num);
  while (s.length > 1) {
    num = getSum(num);
    s = String(num);
  }
  return Number(s);
};
