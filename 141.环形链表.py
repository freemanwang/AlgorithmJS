#
# @lc app=leetcode.cn id=141 lang=python3
#
# [141] 环形链表
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def hasCycle(self, head: ListNode) -> bool:
        # 空指针或仅1节点，必然无环
        if not head or not head.next:
            return False

        # 暴力穷举查重，时间和空间复杂度都是n
        # nodeSet = set() # 存储节点在set中
        # cur = head
        # while cur:
        #     if cur in nodeSet:  # 如果在set中，那就走回环走回来了
        #         return True
        #     nodeSet.add(cur)
        #     cur = cur.next
        # return False

        # 快慢指针法，时间n，空间1
        slow, fast = head, head
        # 快指针一次往后走2个，慢指针走1个；如果有环那么两者必然相遇；
        # 无环的话，fast会先走到None然后退出while循环
        while slow and fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            # if slow == fast:
            if slow is fast:
                return True
        return False
        


        
# @lc code=end

