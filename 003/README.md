---
title: "003 lengthOfLongestSubstring"
---

## 题目描述

> Given a string, find the length of the longest substring without repeating characters.

Example 1:

```
Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

Example 2:

```
Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```

Example 3:

```
Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
            Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

## 解法 1: 滑动窗口

**思路**：

1. 创建映射表：`freq[ch]`代表字符`ch`出现次数
2. 如果当前元素没有出现过，那么滑动窗口向右扩展，更新`freq`，并且比较/更新结果
3. 否则，滑动窗口左侧缩小 1 位，更新`freq`
4. 重新回到第 2 步判断

```javascript
/**
 * @param {string} s
 * @return {number}
 */

const lengthOfLongestSubstring = s => {
  let freq = {};
  let length = s.length;

  // 滑动窗口是: s[left, right]
  let res = 0,
    left = -1,
    right = 0;

  while (left < right) {
    if (right < length && !freq[s[right]]) {
      freq[s[right]] = 1;
      right++;
      res = res < right - left - 1 ? right - left - 1 : res;
    } else {
      left++;
      // 从第一个元素开始, 保证一旦重复, 立即减一; 而原来就是1, 所以直接置0, 即可
      freq[s[left]] = 0;
    }
  }

  return res;
};
```
