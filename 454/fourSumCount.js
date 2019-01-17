/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
const fourSumCount = (A, B, C, D) => {
  let record = {},
    res = 0,
    difference = 0;

  for (let a of A) {
    for (let b of B) {
      if (a + b in record) ++record[a + b];
      else record[a + b] = 1;
    }
  }

  for (let c of C) {
    for (let d of D) {
      difference = 0 - c - d;
      if (difference in record) res += record[difference];
    }
  }

  return res;
};

console.log(fourSumCount([-1, -1], [-1, 1], [-1, 1], [1, -1]));
