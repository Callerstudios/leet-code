var containsDuplicate = function (nums) {
  let setRep = new Set(nums);
  return setRep.size != nums.length;
};
var containsDuplicate = function (nums) {
  let seen = {};
  for (let i = 0; i < nums.length; i++) {
    if (seen[nums[i]]) {
      return true;
    }
    seen[nums[i]] = "yes";
  }
  return false;
};