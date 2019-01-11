/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1 = [], nums2 = []) => {
  let freq = {};

  nums1.forEach(num => (freq[num] ? ++freq[num] : (freq[num] = 1)));

  return nums2.filter(num => {
    if (!freq[num]) return false;
    --freq[num];
    return true;
  });
};
