var hammingWeight = function (n) {
  let count = 0;
  while (n > 0) {
    let rem = n % 2;
    n = Math.floor(n / 2);
    if (rem === 1) {
      count += 1;
    }
  }
  return count;
};
