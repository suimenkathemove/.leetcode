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

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const dummyHead = new ListNode(0);
  let p = l1,
    q = l2,
    curr = dummyHead,
    carry = 0;
  while (p != null || q != null) {
    const x = p?.val ?? 0,
      y = q?.val ?? 0;
    const sum = x + y + carry;
    carry = Math.floor(sum / 10);
    curr.next = new ListNode(sum % 10);
    curr = curr.next;
    if (p != null) p = p.next;
    if (q != null) q = q.next;
  }
  if (carry > 0) {
    curr.next = new ListNode(carry);
  }
  return dummyHead.next;
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
