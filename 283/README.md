---
title: "283 moveZeroes"
---

## 题目描述

Given an array `nums`, write a function to move all `0`'s to the end of it while maintaining the relative order of the non-zero elements.

**Example**:

```
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
```

**Note**:

1. You must do this in-place without making a copy of the array.
2. Minimize the total number of operations.

## 解法 1: 暴力法

**思路**：分别挑选出非零元素和零元素集合，然后重置原数组。

```javascript
const moveZeroes = nums => {
  let unZeroes = nums.filter(item => item !== 0);
  let zeroes = new Array(nums.length - unZeroes.length).fill(0);
  [...unZeroes, ...zeroes].forEach((value, index) => (nums[index] = value));
};
```

**注意**：直接`nums = [...unZeroes, ...zeroes];`并不会**原地修改**原数组。

## 解法 2: 指针标记

**思路**：

1. 初始化指针`k = -1`：`nums[0, k)` 均为非 0 元素
2. 遍历数组，如果当前元素不为 0，则将其移动到`nums[0, k)`中
3. 最后将剩余位置设为 0,即可

```javascript
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
```

**注意**：这种方法空间复杂度为$O(1)$。时间上只需要遍历 1 次`nums`即可。
