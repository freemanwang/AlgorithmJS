#
# @lc app=leetcode.cn id=24 lang=python3
#
# [24] 两两交换链表中的节点
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def swapPairs(self, head: ListNode) -> ListNode:
        # 递归，时间和空间复杂度均为n
        # if not head or not head.next:
        #     return head
        
        # first = head
        # second = head.next

        # first.next = self.swapPairs(second.next)
        # second.next = first

        # return second

        # 迭代法,时间和空间均n
        res = ListNode(-1)
        res.next = head

        pre = res
        first = head
        second = head.next

        while first and second:
            pre.next = second
            first.next = second.next
            second.next = first

            
            
        

# @lc code=end

