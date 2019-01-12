---
title: "215 findKthLargest"
---

## 题目描述

Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Example：

```
Input: [3,2,1,5,6,4] and k = 2
Output: 5

Input: [3,2,3,1,2,4,5,5,6] and k = 4
Output: 4
```

**Note**: You may assume k is always valid, 1 ≤ k ≤ array's length.

## 解法 1: 快排后再筛选

最笨的解法，直接先调用 BIF 进行逆序快排，然后取出第`k-1`个元素即可。

这种算法的时间复杂度是$O(N*\log_2 N)$

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = (nums = [], k) =>
  nums.sort((a, b) => {
    if (a < b) {
      return 1;
    }
    if (a > b) {
      return -1;
    }
    return 0;
  })[k - 1];
```

## 解法 2: 快排中筛选

利用快速排序的`partition`操作：**可以将元素放在排序后的数组中的正确位置**。

每次计算一个元素的正确位置，如果大于目标位置`k`，则进入左半部分（更大的元素所在地）; 反则之。

```javascript
const swap = (nums = [], i, j) => ([nums[i], nums[j]] = [nums[j], nums[i]]);

const partition = (nums = [], left, right) => {
  // 选取随机元素作为标定点: 防止树的不平衡
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

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = (nums = [], k) =>
  selection(nums, 0, nums.length - 1, k - 1);
```

因为不需要排序所有的元素，所以这种算法时间复杂度是：

$$
n + n/2 + ... + 1 = O(2N)
$$
