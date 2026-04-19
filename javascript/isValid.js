var isValid = function (s) {
  const dict = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  
  const openings = [];
  for (let i = 0; i < s.length; i++) {
    if (Object.values(dict).includes(s[i])) {
      openings.push(s[i]);
    } else {
      if (openings.length === 0) {
        return false;
      }
      if ((openings[openings.length - 1] === dict[s[i]])) {
        openings.pop();
      } else {
        return false;
      }
    }
  }
  if (openings.length > 0) {
    return false;
  } else {
    return true;
  }
};
console.log(isValid("(]"))