var detectCapitalUse = function (word) {
  const isUpperCase = (c) => {
    return c === c.toUpperCase();
  };

  if (word.length === 1) return true;

  let expectAllCapital = false;
  if (isUpperCase(word[0]) && isUpperCase(word[1])) {
    expectAllCapital = true;
  }

  for (let i = 1; i < word.length; i++) {
    if (expectAllCapital) {
      if (!isUpperCase(word[i])) return false;
    } else {
      if (isUpperCase(word[i])) return false;
    }
  }
  return true;
};
