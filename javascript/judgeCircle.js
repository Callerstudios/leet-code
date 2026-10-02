var judgeCircle = function (moves) {
  const dict = {
    hor: 0,
    ver: 0,
  };
  if (moves.length % 2 === 1) return false;
  for (let i = 0; i < moves.length; i++) {
    switch (moves[i]) {
      case "U":
        dict["hor"]++;
        break;
      case "D":
        dict["hor"]--;
        break;
      case "L":
        dict["ver"]--;
        break;
      case "R":
        dict["ver"]++;
        break;
      default:
        break;
    }
  }
  return dict["hor"] === 0 && dict["ver"] === 0;
};
