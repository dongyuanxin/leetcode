---
title: "349 intersection"
---

## 题目描述

> Given two arrays, write a function to compute their intersection.

Example 1:

```
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
```

Example 2:

```
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
```

**Note**:

- Each element in the result must be unique.
- The result can be in any order.

## 解法 1: 求交集

**思路**：将两个数组转化为集合，然后取共同的元素，并将其放入结果数组中。

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = (nums1 = [], nums2 = []) => {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  let result = [];
  for (let item of set2.values()) {
    set1.has(item) && result.push(item);
  }
  return result;
};
```

## 解法 2: 函数式

**注意**：可以炫技，但 Leetcode 上跑出来速度更慢。

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = (nums1 = [], nums2 = []) => {
  let result = nums1.filter(x => nums2.includes(x));
  return Array.from(new Set(result));
};
```

## 拓展: 交并补预算

借助`...`运算符和 ES6 中的`Set`数据结构，很容易可以实现**交并补**操作。

如果结果需要返回数组，可以调用`Array.from()`方法。

```javascript
const union = (arr = [], brr = []) => new Set([...arr, ...brr]);

const intersect = (arr = [], brr = []) =>
  new Set(arr.filter(x => brr.includes(x)));

const except = (arr = [], brr = []) =>
  new Set(arr.filter(x => !brr.includes(x)));
```
