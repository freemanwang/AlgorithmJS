#
# @lc app=leetcode.cn id=25 lang=python3
#
# [25] K 个一组翻转链表
#

# @lc code=start
# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def reverseKGroup(self, head: ListNode, k: int) -> ListNode:
        # 空指针
        if not head:
            return head
        # 没有k个节点
        for k in range(k):
            if not head.next:
                return False
        
        pointers = {}
        first = head
        pointers[0] = head
        for i in range(1, k):
            pointers[i] = pointers[i-1].next
            
            
# @lc code=end

