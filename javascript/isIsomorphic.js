var isIsomorphic = function (s, t) {
  if (s.length != t.length) return false;
  if (t === s) return true;
  let dict = {};
  let newString = "";
  for (let i = 0; i < s.length; i++) {
    let char = `${s[i]}`;
    if (!(char in dict)) {
      if (Object.values(dict).includes(t[i])) return false;
      dict[char] = t[i];
    }
    newString += dict[char];
  }
  return t === newString;
};
