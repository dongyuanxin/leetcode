const sortColors = (nums = []) => {
  // nums[0, zero]: 均是0元素
  let zero = -1;
  // nums[two, nums.length - 1]: 均是2元素
  let two = nums.length;

  for (let i = 0; i < two; ) {
    if (nums[i] === 1) {
      ++i;
    } else if (nums[i] === 2) {
      --two;
      [nums[i], nums[two]] = [nums[two], nums[i]];
    } else {
      // nums[i] === 0
      ++zero;
      [nums[i], nums[zero]] = [nums[zero], nums[i]];
      ++i;
    }
  }
};

const brr = [2, 0, 2, 1, 1, 0];
sortColors(brr);
console.log(brr);
