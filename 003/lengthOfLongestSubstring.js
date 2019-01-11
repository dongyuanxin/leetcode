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
    } else {
      left++;
      freq[s[left]] = 0;
    }
    res = res < right - left - 1 ? right - left - 1 : res;
  }

  return res;
};

console.log(lengthOfLongestSubstring("bbb"));
