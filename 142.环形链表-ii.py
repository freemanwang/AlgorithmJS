#
# @lc app=leetcode.cn id=142 lang=python3
#
# [142] 环形链表 II
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def detectCycle(self, head: ListNode) -> ListNode:
        if not head or not head.next:
            return None
        # 解法1 时间和空间复杂度都是n
        # 使用set记录所有遍历过的节点
        # 如果某在set内的节点被再次检查是否存在，那它就是环上第一个节点
        # hash_map = set()
        # while cur:
        #     if cur not in hash_map:
        #         hash_map.add(cur)
        #     else:
        #         return cur
        #     cur = cur.next
        # return None

        # 快慢指针法，2段解题，论证有点麻烦，晚上再看
        
        
# @lc code=end

