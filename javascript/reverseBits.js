var reverseBits = function (n) {
  var intToBinReversed = (int) => {
    let res = [];
    let curr = int;
    while (curr > 0) {
      let rem = curr % 2;
      res.push(`${rem}`);
      curr = Math.floor(curr / 2);
    }
    let length = res.length;
    for (let i = length; i < 32; i++) {
      res.push("0");
    }
    return res.join("");
  };
  var binToInt = (bin) => {
    let sum = 0;
    for (let i = 0; i < bin.length; i++) {
      let power = Math.pow(2, bin.length - 1 - i);
      sum += bin[i] === "1" ? power : 0;
    }
    return sum;
  };
  return binToInt(intToBinReversed(n));
};
var binToInt = (bin) => {
  let sum = 0;
  for (let i = 0; i < bin.length; i++) {
    let power = Math.pow(2, bin.length - 1 - i);
    let toAdd = bin[i] === "1" ? power : 0;
    sum += toAdd;
  }
  return sum;
};
var intToBinReversed = (int) => {
  let res = [];
  let curr = int;
  while (curr > 0) {
    let rem = curr % 2;
    res.push(`${rem}`);
    curr = Math.floor(curr / 2);
    // console.log(`Rem: ${rem} Curr: ${curr}`)
  }
  let length = res.length;
  console.log(`length: ${length}`);
  for (let i = length; i < 32; i++) {
      res.push("0");
    }
    console.log(`length: ${length}`);
  console.log(`reversed binary: ${res.join("")}`);
  return res.join("");
};
// console.log(binToInt("00111001011110000010100101000000"))
console.log(reverseBits(43261596));
// console.log(intToBinReversed(43261596));
