var addBinary = function (a, b) {
  const getSum = (A, B, C) => A ^ B ^ C;
  const getCarry = (A, B, C) => C * (A ^ B) + A * B;
  const res = [];
  let carry = 0;

  const iter = Math.max(a.length, b.length);
  const rA = a.split("").reverse();
  const rB = b.split("").reverse();

  for (let i = 0; i < iter; i++) {
    const sum = getSum(rA[i] || 0, rB[i] || 0, carry);
    carry = getCarry(rA[i] || 0, rB[i] || 0, carry);
    res.push(sum);
  }
  if (carry !== 0) res.push(1);
  return res.reverse().join("");
};
