var isPerfectSquare = function (num) {
  let sqrt = Math.sqrt(num);
  let floored = Math.floor(sqrt);
  return sqrt === floored;
};
