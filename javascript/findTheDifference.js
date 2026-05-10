var findTheDifference = function (s, t) {
  for (let i = 0; i < t.length; i++) {
    console.log(s);
    if (s.includes(t[i])) {
      let index = s.indexOf(t[i]);
      s = s.substring(0, index) + s.substring(index + 1);
    } else {
      return t[i];
    }
  }
};
