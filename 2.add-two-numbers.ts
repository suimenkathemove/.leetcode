/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const listNodeToNums = (l: ListNode | null) => {
  const iter = (l: ListNode | null, nums: number[]) => {
    if (l != null) {
      nums.unshift(l.val);
      return iter(l.next, nums);
    }

    return nums;
  };

  return iter(l, []);
};

const numsReverseToNum = (nums: number[]) =>
  Number(nums.reverse().map(String).join(""));

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const l1Nums = listNodeToNums(l1);
  const l2Nums = listNodeToNums(l2);
  const l1Num = numsReverseToNum(l1Nums);
  const l2Num = numsReverseToNum(l2Nums);
  const nums = String(l1Num + l2Num)
    .split("")
    .map(Number);

  // @ts-expect-error
  return nums.reduce((acc, cur) => new ListNode(cur, acc), null);
}

const reduceArgs = [
  (acc: ListNode | null, cur: number) => new ListNode(cur, acc),
  null,
];
// @ts-expect-error
const l1 = [2, 4, 3].reduce(...reduceArgs) as ListNode | null;
// @ts-expect-error
const l2 = [5, 6, 4].reduce(...reduceArgs) as ListNode | null;
const output = addTwoNumbers(l1, l2);
console.log(output);
// @lc code=end
