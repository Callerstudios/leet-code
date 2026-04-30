var containsDuplicate = function (nums) {
  let setRep = new Set(nums);
  return [...setRep].length != nums.length;
};
