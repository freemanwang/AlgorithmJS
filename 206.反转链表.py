#
# @lc app=leetcode.cn id=206 lang=python3
#
# [206] 反转链表
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        if not head or head.next == None:  # 如果空链表或者只有1个，直接返回head即可
            return head
        # 此时链表长度 >= 2

        # 时间复杂度n，空间复杂度1
        # preNode = None
        # curNode = head
        # nextNode = head.next
        # # preNode.next = None # 把反转后末节点next置None
        # while curNode: # 下个节点非空，就继续反转
        #     curNode.next = preNode
        #     preNode = curNode
        #     curNode = nextNode
        #     if nextNode: # 如果nextNode为None，那么它没有next属性；下次遍历将curNode设为None后会结束循环 
        #         nextNode = nextNode.next
        # return preNode

        # 将原链表逐个放到新链表，时间复杂度和空间复杂度均n，
        new = None
        while head:
            tmp = head
            head = head.next
            tmp.next = new
            new = tmp
        return new
            # head, head.next, new = head.next, new, head


    
# @lc code=end

