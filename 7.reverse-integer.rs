/*
 * @lc app=leetcode id=7 lang=rust
 *
 * [7] Reverse Integer
 */

// @lc code=start
use std::convert::TryFrom;

fn minus(is_minus: bool) -> i64 {
    if is_minus {
        -1
    } else {
        1
    }
}

impl Solution {
    pub fn reverse(x: i32) -> i32 {
        if x == 0 {
            return 0;
        }
        let is_minus = x < 0;
        let absolute_x = x as i64 * minus(is_minus);
        let mut absolute_x_vec: Vec<i64> = absolute_x
            .to_string()
            .split("")
            .filter(|item| item.len() != 0)
            .map(|item| item.parse().unwrap())
            .collect();
        absolute_x_vec.reverse();
        let absolute_x_string: String = absolute_x_vec
            .iter()
            .map(|item| item.to_string())
            .collect::<Vec<_>>()
            .join("");
        let reversed_absolute_x: i64 = absolute_x_string.parse().unwrap();
        let max = if is_minus {
            2_i64.pow(31)
        } else {
            2_i64.pow(31) - 1
        };
        if reversed_absolute_x > max {
            return 0;
        }
        let output_i64 = reversed_absolute_x * minus(is_minus);
        let output_i32: i32 = TryFrom::try_from(output_i64).unwrap();
        output_i32
    }
}
// @lc code=end

