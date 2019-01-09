/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = (nums = []) => {
  let arr = [0, 0, 0];
  for (let num of nums) {
    ++arr[num];
  }

  for (let i = 0, k = 0; i < arr.length; ++i) {
    for (let j = 0; j < arr[i]; ++j) {
      nums[k++] = i;
    }
  }
};
