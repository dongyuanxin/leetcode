/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = (nums, k) => {
  let record = new Set(),
    length = nums.length;

  for (let i = 0; i < length; ++i) {
    if (record.has(nums[i])) {
      return true;
    }

    record.add(nums[i]);

    if (record.size >= k + 1) {
      record.delete(nums[i - k]);
    }
  }

  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
