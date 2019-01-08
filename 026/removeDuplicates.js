/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums = []) {
  if (!nums.length) {
    return 0;
  }
  // i: 慢指针; j: 快指针
  // nums[0: i]: 不重复元素
  let i = 0,
    j = 1;
  for (; j < nums.length; ++j) {
    if (nums[j] !== nums[i]) {
      // 如果不相等，那么用nums[j]覆盖前面的值
      // 相当于 nums[j] 前移
      nums[++i] = nums[j];
    }
  }
  return i + 1;
};
