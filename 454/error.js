/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
const fourSumCount = (A, B, C, D) => {
  let record = {},
    res = 0;
  for (let a of A) {
    if (-a in record) {
      ++record[-a];
    } else {
      record[-a] = 1;
    }
  }

  for (let b of B) {
    for (let c of C) {
      for (let d of D) {
        if (record[b + c + d]) res += record[b + c + d];
      }
    }
  }

  return res;
};

fourSumCount([-1, -1], [-1, 1], [-1, 1], [1, -1]);
