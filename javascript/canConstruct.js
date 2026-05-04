var canConstruct = function (ransomNote, magazine) {
  while (ransomNote.length > 0) {
    let index = magazine.indexOf(ransomNote[0]);
    if (index === -1) {
      return false;
    }
    ransomNote = ransomNote.substring(1);
    magazine = magazine.substring(0, index) + magazine.substring(index + 1);
  }
  return true;
};
