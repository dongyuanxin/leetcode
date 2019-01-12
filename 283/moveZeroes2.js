const moveZeroes = (nums = []) => {
  let k = 0; // nums[0, k) 均为非0元素
  for (let num of nums) {
    num && (nums[k++] = num);
  }

  // 此时, nums[k, nums.length) 均为0
  for (; k < nums.length; ++k) {
    nums[k] = 0;
  }
};
