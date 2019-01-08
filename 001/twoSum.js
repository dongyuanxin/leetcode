/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (nums = [], target) => {
  let mem = new Map(),
    num;
  for (let i = 0; i < nums.length; ++i) {
    num = nums[i];
    if (mem.has(target - num)) {
      return [mem.get(target - num), i];
    }
    mem.set(num, i);
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
