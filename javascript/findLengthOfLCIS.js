var findLengthOfLCIS = function (nums) {
  let counter = 0;
  let curr = nums[0] - 1;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= curr) {
      counter = 1;
    } else {
      counter++;
    }
    max = Math.max(counter, max);
    curr = nums[i];
  }
  return max;
};
