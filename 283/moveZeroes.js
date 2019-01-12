const moveZeroes = nums => {
  let unZeroes = nums.filter(item => item !== 0);
  let zeroes = new Array(nums.length - unZeroes.length).fill(0);
  [...unZeroes, ...zeroes].forEach((value, index) => (nums[index] = value));
};

let arr = [0, 1, 0, 3, 12];
moveZeroes(arr);
console.log(arr);
