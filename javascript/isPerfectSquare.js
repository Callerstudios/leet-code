var isPerfectSquare = function (num) {
  let sqrt = Math.sqrt(num);
  let floored = Math.floor(sqrt);
  return sqrt === floored;
};
var isPerfectSquare = function (num) {
  let min = 2;
  let max = Math.floor(num / 2);
  if (num === 1) {
    return true;
  }

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    let sqrd = mid * mid;
    if (sqrd === num) {
      return true;
    } else if (sqrd < num) {
      min = mid;
      min += 1;
    } else if (sqrd > num) {
      max = mid;
      max -= 1;
    }
  }
  return false;
};