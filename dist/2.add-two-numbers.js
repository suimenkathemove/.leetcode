"use strict";
/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
 */
var _a, _b;
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
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return ListNode;
}());
function addTwoNumbers(l1, l2) {
    var _a, _b;
    var dummyHead = new ListNode(0);
    var p = l1, q = l2, curr = dummyHead, carry = 0;
    while (p != null || q != null) {
        var x = (_a = p === null || p === void 0 ? void 0 : p.val) !== null && _a !== void 0 ? _a : 0, y = (_b = q === null || q === void 0 ? void 0 : q.val) !== null && _b !== void 0 ? _b : 0;
        var sum = x + y + carry;
        carry = Math.floor(sum / 10);
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        if (p != null)
            p = p.next;
        if (q != null)
            q = q.next;
    }
    if (carry > 0) {
        curr.next = new ListNode(carry);
    }
    return dummyHead.next;
}
var reduceArgs = [
    function (acc, cur) { return new ListNode(cur, acc); },
    null,
];
// @ts-expect-error
var l1 = (_a = [2, 4, 3]).reduceRight.apply(_a, reduceArgs);
// @ts-expect-error
var l2 = (_b = [5, 6, 4]).reduceRight.apply(_b, reduceArgs);
var output = addTwoNumbers(l1, l2);
console.log(output);
// @lc code=end
