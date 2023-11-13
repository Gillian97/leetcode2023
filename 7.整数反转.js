/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
// 1. 笨方法 转字符串->翻转
var reverse = function (x) {
  let y = x < 0 ? -x : x;
  const str = y + "";
  console.log(str);
  const reversedStr = str.split("").reverse();

  const idx = reversedStr.findIndex((v) => Number(v) > 0);
  const reversedNum = Number(reversedStr.slice(idx).join(""));
  const res = x < 0 ? 0 - reversedNum : reversedNum;
  return res > Math.pow(2, 31) - 1 || res < 0 - Math.pow(2, 31) ? 0 : res;
};
reverse(1534236469);
// @lc code=end
