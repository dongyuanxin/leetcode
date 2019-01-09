---
title: "209 minSubArrayLen"
---

## 题目描述

> Given an array of n **positive integers** and a positive integer s, find the minimal length of a **contiguous** subarray of which the sum ≥ s. If there isn't one, return 0 instead.

**Example**:

```
Input: s = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: the subarray [4,3] has the minimal length under the problem constraint.
```

## 解法 1: 暴力法

双重循环遍历一遍数组，计算每个结果。
时间复杂度是$O(N^2)$，因为会有一些是重复计算。

优化的方法是：内循环检测到满足条件，立即跳出内循环体。
因为题目已经要求**最短**长度的**连续**子序列。

```javascript
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = (s, nums) => {
  const length = nums.length;

  let result = length + 1,
    sum = 0;
  for (let i = 0; i < length; ++i) {
    sum = 0;
    for (let j = i; j < length; ++j) {
      sum += nums[j];
      if (sum >= s) {
        // 如果当前和刚好大于s，那么不需要再向后遍历，因为是求解最短长度
        result = j - i + 1 < result ? j - i + 1 : result;
        break;
      }
    }
  }
  return result === length + 1 ? 0 : result;
};
```

## 解法 2: 滑动窗口

暴力法即使优化，也无法在数量及上提高效率。
这里利用**滑动窗口**的思路，使用一个动态的滑动窗口从左推到右，一次遍历得到结果，
时间复杂度是$O(N)$

大体思路如下：

- 如果滑窗当前元素的和小于`s`，那么扩大滑窗，右侧指针`i`右移
- 否则，缩小滑窗，**左侧指针`j`左移**
- 重复前面两步，滑窗就之间从集合左侧移动到了集合最右侧

```javascript
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = (s, nums) => {
  const length = nums.length;
  let result = length + 1;

  // 滑动窗口 nums[j, i]
  let i = 0,
    j = -1,
    sum = 0;

  while (j < i) {
    if (i < length && sum < s) {
      sum += nums[i];
      ++i;
    } else {
      ++j;
      sum -= nums[j];
    }

    if (sum >= s) {
      result = i - j - 1 > result ? result : i - j - 1;
    }
  }

  return result === length + 1 ? 0 : result;
};
```
