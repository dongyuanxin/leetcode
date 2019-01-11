---
title: "350 intersect"
---

## 题目描述

> Given two arrays, write a function to compute their intersection.

Example 1:

```
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
```

Example 2:

```
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
```

**Note**:

- Each element in the result should appear as many times as it shows in both arrays.
- The result can be in any order.

## 解法 1: 映射表

**思路**：

1. 借助`map`数据结构，可以快速记录每个元素在`nums1`中的出现次数。
2. 再遍历`nums2`，挑选出现在`nums1`中的，且没有被匹配的元素。

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1 = [], nums2 = []) => {
  let freq = {},
    result = [];
  for (let num of nums1) {
    freq[num] ? ++freq[num] : (freq[num] = 1);
  }

  for (let num of nums2) {
    if (!freq[num]) continue;

    result.push(num);
    --freq[num];
  }

  return result;
};
```

## 解法 2: 函数式

代码更简洁，**Leetcode 跑分更快**。

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1 = [], nums2 = []) => {
  let freq = {};

  nums1.forEach(num => (freq[num] ? ++freq[num] : (freq[num] = 1)));

  return nums2.filter(num => {
    if (!freq[num]) return false;
    --freq[num];
    return true;
  });
};
```

## 错误解法

因为刚做了 349 题，所以直接写了如下代码：

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1 = [], nums2 = []) =>
  nums2.filter(item => nums1.includes(item));
```

过不了下面的输入样例：

```
Input
[4,9,5]
[9,4,9,8,4]
```

因为 9 与 4 被计算过了 1 次，那么`nums2`后面的 9 与 4 没法再与`nums1`中的进行匹配了。
