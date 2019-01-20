/**
 * @param {number[][]} points
 * @return {number}
 */
const getDis = (a, b) => {
  return (a[0] - b[0]) * (a[0] - b[0]) + (a[1] - b[1]) * (a[1] - b[1]);
};

const numberOfBoomerangs = points => {
  const length = points.length;
  let num = 0;
  for (let i = 0; i < length; ++i) {
    let record = {},
      dis;
    for (let j = 0; j < length; ++j) {
      if (j === i) continue;

      dis = getDis(points[i], points[j]);

      if (record[dis]) ++record[dis];
      else record[dis] = 1;
    }

    for (let dis in record) {
      if (record[dis] >= 1) num += record[dis] * (record[dis] - 1);
    }
  }

  return num;
};

numberOfBoomerangs([[0, 0], [1, 0], [2, 0]]);
