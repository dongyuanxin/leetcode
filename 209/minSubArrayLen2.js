/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = (s, nums) => {
  const length = nums.length;
  let result = length + 1;

  // 滑动窗口 nums[j, i]
  let i = 0,
    j = -1,
    sum = 0;

  while (j < i) {
    if (i < length && sum < s) {
      sum += nums[i];
      ++i;
    } else {
      ++j;
      sum -= nums[j];
    }

    if (sum >= s) {
      result = i - j - 1 > result ? result : i - j - 1;
    }
  }

  return result === length + 1 ? 0 : result;
};
