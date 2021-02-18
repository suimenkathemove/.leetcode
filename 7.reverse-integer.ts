/*
 * @lc app=leetcode id=7 lang=typescript
 *
 * [7] Reverse Integer
 */

// @lc code=start
const minus = (isMinus: boolean) => (isMinus ? -1 : 1);

function reverse(x: number): number {
  const isMinus = x < 0;
  const absoluteX = x * minus(isMinus);
  const reversedAbsoluteX = Number(
    String(absoluteX).split("").reverse().join("")
  );
  const max = isMinus ? 2 ** 31 : 2 ** 31 - 1;
  if (reversedAbsoluteX > max) {
    return 0;
  }
  return reversedAbsoluteX * minus(isMinus);
}
// @lc code=end

const outputs = [reverse(123), reverse(-123), reverse(120), reverse(0)];
console.log(outputs);
