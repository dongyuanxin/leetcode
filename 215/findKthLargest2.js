const swap = (nums = [], i, j) => ([nums[i], nums[j]] = [nums[j], nums[i]]);

const partition = (nums = [], left, right) => {
  let randInt = Math.floor(Math.random() * (right - left + 1) + left);
  swap(0, randInt);

  // nums(left, j] > nums[left]
  let j = left;
  for (let i = left + 1; i <= right; ++i) {
    nums[i] > nums[left] && swap(nums, i, ++j);
  }
  swap(nums, left, j);
  return j;
};

const selection = (nums = [], left, right, nth) => {
  if (left === right) {
    return nums[left];
  }

  let p = partition(nums, left, right);
  if (p === nth) return nums[nth];
  if (p > nth) return selection(nums, left, p - 1, nth);
  if (p < nth) return selection(nums, p + 1, right, nth);
};

const findKthLargest = (nums = [], k) =>
  selection(nums, 0, nums.length - 1, k - 1);

let arr = [3, 2, 3, 1, 2, 4, 5, 5, 6];
console.log(findKthLargest(arr, 4));
console.log(arr);
