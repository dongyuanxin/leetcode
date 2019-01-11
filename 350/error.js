/** Input
 * [4,9,5]
 * [9,4,9,8,4]
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1 = [], nums2 = []) =>
  nums2.filter(item => nums1.includes(item));
