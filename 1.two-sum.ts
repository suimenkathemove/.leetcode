/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  let output: [number, number];

  nums.some((num1, num1Index) => {
    const expectedNum1Nums = nums.slice();
    expectedNum1Nums.splice(num1Index, 1);

    const num2 = expectedNum1Nums.find(
      (expectedNum1Num) => expectedNum1Num + num1 === target
    );

    if (num2 != null) {
      const num2Index = nums.findIndex(
        (num, numIndex) => numIndex !== num1Index && num === num2
      );
      output = [num1Index, num2Index];

      return true;
    }

    return false;
  });

  return output;
}
// @lc code=end
