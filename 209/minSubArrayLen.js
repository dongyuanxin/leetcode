/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = (s, nums) => {
  const length = nums.length;

  let result = length + 1,
    sum = 0;
  for (let i = 0; i < length; ++i) {
    sum = 0;
    for (let j = i; j < length; ++j) {
      sum += nums[j];
      if (sum >= s) {
        // 如果当前和刚好大于s，那么不需要再向后遍历，因为是求解最短长度
        result = j - i + 1 < result ? j - i + 1 : result;
        break;
      }
    }
  }
  return result === length + 1 ? 0 : result;
};

console.log(minSubArrayLen(3, [1, 1]));
