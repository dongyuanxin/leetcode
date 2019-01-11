/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1 = [], nums2 = []) => {
  let freq = {},
    result = [];
  for (let num of nums1) {
    freq[num] ? ++freq[num] : (freq[num] = 1);
  }

  for (let num of nums2) {
    if (!freq[num]) continue;

    result.push(num);
    --freq[num];
  }

  return result;
};
