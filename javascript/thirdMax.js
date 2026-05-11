var thirdMax = function (nums) {
  let setRep = new Set(nums);
  let listRep = [...setRep];
  let sorted = listRep.sort((a, b) => b - a);
  if (sorted.length < 3) return sorted[0];
  return sorted[2];
};
