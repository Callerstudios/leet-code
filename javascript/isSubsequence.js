var isSubsequence = function (s, t) {
  let result = "";
  let currIndex = 0;
  if (s === t) return true;
  for (char of t) {
    if (char === s[currIndex]) {
      result += char;
      currIndex++;
    }
    if (result === s) {
      return true;
    }
  }
  return false;
};
