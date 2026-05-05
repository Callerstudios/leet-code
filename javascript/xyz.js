var xyz = function (n) {
  let comb = [
    [1, 1],
    [1, 2],
    [1, 3],
    [2, 1],
    [2, 2],
    [2, 3],
    [3, 1],
    [3, 2],
    [3, 3],
  ];
  if (n < 4) return true;
  var tryCombination = (myPick, oppPick) => {
    let count = 0;
    let myTurn = true;
    while (count < n) {
      count += myTurn ? myPick : oppPick;
      myTurn = !myTurn;
    }
    return myTurn === false;
  };
  for (let i = 0; i < comb.length; i++) {
    if (tryCombination(comb[i][0], comb[i][1]) === false) {
      console.log(`Comb: ${comb[i][0]} - ${comb[i][1]}`);
      return false;
    }
  }
  return true;
};
