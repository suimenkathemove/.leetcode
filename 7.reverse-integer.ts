/*
 * @lc app=leetcode id=7 lang=typescript
 *
 * [7] Reverse Integer
 */

// @lc code=start
const MIN = -(2 ** 31);
const MAX = 2 ** 31 - 1;
function reverse(x: number): number {
  let rev = 0;
  while (x != 0) {
    const pop = x % 10;
    x = Math.trunc(x / 10);
    rev = rev * 10 + pop;
  }
  if (rev < MIN || MAX < rev) {
    return 0;
  }
  return rev;
}
// @lc code=end
