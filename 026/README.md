---
title: "026 removeDuplicates"
---

## 题目描述

Given a sorted array nums, remove the duplicates **in-place** such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place **with $O(1)$ extra memory**.

Example:

```
Given nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

It doesn't matter what you leave beyond the returned length.
```

## 解法 1: 指针标记

大致思路如下：

1. 准备两个指针：i（慢指针）和 j（快指针）。
2. j 从第二个元素开始遍历
   - 如果`arr[i] !== arr[j]`：扩充`arr[0, i]`，并且继续移动 j
   - 否则，继续移动 j

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums = []) => {
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
```
