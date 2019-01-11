/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = (nums1 = [], nums2 = []) => {
  let result = nums1.filter(x => nums2.includes(x));
  return Array.from(new Set(result));
};
