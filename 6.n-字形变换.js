/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] N 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
// 每个字符的位置是固定的 可以找规律算出来
// 时间复杂度: 字符串只遍历一遍 O(n) 空间复杂度: 只存储字符数个元素 O(n)
var convert = function (str, numRows) {
  if (numRows === 1) return str;
  // 初始化一个二维数组 numRows * numRows
  const arr = new Array(numRows);
  const count = Math.floor(str.length / (2 * numRows - 2));
  let s = str;
  for (let index = 0; index < count + 1; index++) {
    const start = 0;
    const end = 2 * numRows - 2;
    for (let j = start; j < end; j++) {
      if (!s[j]) {
        break;
      }
      const pos = j >= numRows ? numRows - 1 - (j - (numRows - 1)) : j;
      if (arr[pos]) {
        arr[pos].push(s[j]);
      } else {
        arr[pos] = [s[j]];
      }
    }
    s = s.slice(end);
  }
  return arr.reduce((pre, v) => pre + v.join(""), []);
};
console.log(convert("PAYPALISHIRING", 4));
// @lc code=end
