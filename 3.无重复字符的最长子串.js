/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

/**
 * 做题需要注意的点:
 * 1. 边界条件/返回值
 * 2. 看到题目能知道考点, 能有大概思路
 * 3. 思路是否清晰, 能否写出伪码
 * 4. 实现代码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s.length || s.length === 1) {
    return s.length;
  }
  /**
   * 大概思路是 遍历
   * 从第1个字符开始 逐步向后移动索引 如果新的字符与已有的出现重复 则将该次长度记录
   * 新的记录从第2个字符开始 继续寻找有效的无重复字符串长度
   */
  let maxLen = 0;
  for (let startIdx = 0; startIdx < s.length - 1; startIdx++) {
    for (let index = startIdx + 1; index < s.length; index++) {
      // 中间出现重复字符
      if (s.slice(startIdx, index).includes(s[index])) {
        maxLen = Math.max(index - startIdx, maxLen);
        break;
      }
      // 直到最后一个字符也没有出现重复字符
      if (index === s.length - 1) {
        maxLen = Math.max(s.length - startIdx, maxLen);
      }
    }
  }
  return maxLen;
};
console.log(lengthOfLongestSubstring("au"));
// @lc code=end
