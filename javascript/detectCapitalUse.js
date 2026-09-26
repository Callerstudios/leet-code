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


var detectCapitalUse = function (word) {
  return (
    word.substring(1) === word.substring(1).toLowerCase() ||
    (word.substring(1) === word.substring(1).toUpperCase() &&
      word[0] === word[0].toUpperCase())
  );
};

var detectCapitalUse = function (word) {
  return (
    word == word[0] + word.substr(1).toLowerCase() || word == word.toUpperCase()
  );
};