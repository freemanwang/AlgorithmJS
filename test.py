# coding=utf-8
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

# [1,2,3,4,5],
from collections import deque

root = TreeNode(3)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.left = TreeNode(4)
root.left.right = TreeNode(5)
class Solution:
    def levelOrder(self, root):
        if not root:
            return 0
        '''
        BFS, T = n, s = 1
        '''
        queue = deque()
        queue.append(root)
        height = float('inf')
        level = 0
        while queue:
            length = len(queue) # 本层有多少个节点
            level += 1 # 当前树高+1
            for _ in range(length):
                node = queue.popleft()
                if level > height: # 当前节点的高度超过记录的最小height，此处不用继续了
                    continue
                if not node.left and not node.right: # 当前节点是叶节点了，记录level为最小深度
                    height = level
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
        return height


s = Solution()
res = s.levelOrder(root)
print(res)