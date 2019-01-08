---
title: "001 twoSum"
---

## 题目：两数之和

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

```
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```

## 解法 1

最直接的解法肯定是暴力法，双重循环，时间复杂度是$$ O(N^2) $$

## 解法 2

利用`HashMap`可以将复杂度降低到$O(N)$

大致思路如下：

1. 遍历数组，如果目标数与当前元素的差在`HashMap`中，那么就返回当前的索引和差的索引
2. 否则，将当前差作为键，索引作为值，记录在`HashMap`中

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (nums = [], target) => {
  let mem = new Map(),
    num;
  for (let i = 0; i < nums.length; ++i) {
    num = nums[i];
    if (mem.has(target - num)) {
      return [mem.get(target - num), i];
    }
    mem.set(num, i);
  }
};
```

## 拓展延伸

如果是有序数据，那么就可以使用“碰撞指针”的思路，从数组两边向中间靠拢。
时间复杂度是$O(N)$,而且空间复杂度是$O(1)$.
