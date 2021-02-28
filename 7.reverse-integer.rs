/*
 * @lc app=leetcode id=7 lang=rust
 *
 * [7] Reverse Integer
 */

// @lc code=start
impl Solution {
    pub fn reverse(mut x: i32) -> i32 {
        let mut rev = 0;
        while x != 0 {
            let pop = x % 10;
            x /= 10;
            if rev < std::i32::MIN / 10 || (rev == std::i32::MIN / 10 && pop > 7) {
                return 0;
            }
            if rev > std::i32::MAX / 10 || (rev == std::i32::MAX / 10 && pop < -8) {
                return 0;
            }
            rev = rev * 10 + pop;
        }
        rev
    }
}
// @lc code=end
