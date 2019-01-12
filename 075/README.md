---
title: "075 sortColors"
---

## 题目描述

Given an array with n objects colored red, white or blue, sort them **in-place** so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

**Note**: You are not suppose to use the library's sort function for this problem.

Example:

```
Input: [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
```

## 解法 1: 基数排序

由于元素均是大于等于 0 的整数，因此可以使用“基数排序”。时间复杂度是 $O(N)$

```javascript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = nums => {
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
```

## 解法 2: 三路快排

因为只有 3 中元素，可以借助“三路快排”的思路。这样相比较解法 1，消耗时间从$O(2N)$降低到了$O(N)$。大只思路如下：

1. 准备两个指针：zero 和 two。这样数组被切割成 3 个部分，具体含义看代码。
2. 如果当前元素等于 1，则不操作两个指针，移动 i。
3. 如果元素等于 2，那么通过交换，扩充以 2 为元素的数组。
4. 如果等于 0，那么通过交换，扩充以 1 为元素的数组。

```javascript
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
```
