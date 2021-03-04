"use strict";
/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */
// @lc code=start
function twoSum(nums, target) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}
console.log(twoSum([3, 2, 4], 6));
// @lc code=end
