var convert = function (s, numRows) {
  if (numRows === 1) {
    return s;
  }
  let currentCol = 0;
  let currentRow = 0;
  let isGoingDown = true;
  let result = [];
  for (let i = 0; i < numRows; i++) {
    result[i] = [];
  }
  for (let i = 0; i < s.length; i++) {
    result[currentRow][currentCol] = s[i];
    if (currentRow === numRows - 1) {
      isGoingDown = false;
    }
    if (currentRow === 0) {
      isGoingDown = true;
    }
    if (isGoingDown) {
      currentRow++;
    } else {
      currentRow--;
      currentCol++;
    }
  }
  return result.map((row) => row.join("")).join("");
};
console.log(convert("PAYPALISHIRING", 3));
