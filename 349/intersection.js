/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = (nums1 = [], nums2 = []) => {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  let result = [];
  for (let item of set2.values()) {
    set1.has(item) && result.push(item);
  }
  return result;
};

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
