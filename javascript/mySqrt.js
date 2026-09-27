var mySqrt = function (x) {
  if (x < 2) return x;
  let l = 1;
  let r = x;

  while (l <= r) {
    const mid = Math.ceil((l + r) / 2);
    const squaredMid = mid * mid;
    if (squaredMid === x) return mid;
    if (squaredMid < x) {
      l = mid;
      l++;
    } else {
      r = mid;
      r--;
    }
  }
  return r;
};
