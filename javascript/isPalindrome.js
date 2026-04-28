var isPalindrome = function (s) {
  var isInRangeOfCharCode = (str, index, minNum, maxNum) => {
    let num = str.charCodeAt(index);
    let inRange = num >= minNum && num <= maxNum;
    return inRange;
  };
  let lowerCase = s.toLowerCase();
  let min = 0;
  let max = s.length - 1;
  if (lowerCase.trim() === "") {
    return true;
  }
  while (min <= max) {
    while (
      !(
        isInRangeOfCharCode(lowerCase, min, 48, 57) ||
        isInRangeOfCharCode(lowerCase, min, 97, 122)
      )
    ) {
      if (min >= max) {
        break;
      }
      min += 1;
    }
    while (
      !(
        isInRangeOfCharCode(lowerCase, max, 48, 57) ||
        isInRangeOfCharCode(lowerCase, max, 97, 122)
      )
    ) {
      if (max <= min) {
        break;
      }
      max -= 1;
    }
    if (lowerCase[min] !== lowerCase[max]) {
      return false;
    }
    min += 1;
    max -= 1;
  }
  return true;
};
