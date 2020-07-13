#
# @lc app=leetcode.cn id=102 lang=python3
#
# [102] 二叉树的层次遍历
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        '''
        BFS思路：
        T = n，因为每个节点都访问了
        写的比较丑陋，自定的结构，visited中放 [层数, node]
        nodes 中放 [层数， val]，
        最后拿nodes去遍历，同层放同一个数组，生成res
        '''
        # if not root:
        #     return []
        
        # res = []
        # nodes = []
        # visited = [[0, root]]

        # while visited:
        #     item = visited.pop(0)
        #     nodes.append([item[0], item[1].val]) # [level, val] 分别为层级和值
        #     if item[1].left:
        #         visited.append([item[0]+1, item[1].left])
        #     if item[1].right:
        #         visited.append([item[0]+1, item[1].right])

        # level = nodes[0][0]
        # tmp = []
        # for item in nodes:
        #     if item[0] == level:
        #         tmp.append(item[1].val)
        #     else:
        #         res.append(tmp)
        #         tmp = [item[1].val]
        #         level = item[0]
        # res.append(tmp) # 不能少，不然会少最后一层
        # return res


        '''
        DFS思路：
        同样是存层级信息，深度遍历树
        '''

        if not root:
            return []

        nodes = []
        
        level = 0

        self.dfs(root, level, nodes)

        height = nodes[-1][0] # 树高，即最后一个元素的level

        res = [[] * height]

        for node in nodes:
            res[node[0]].append(node[1])
        
        return res


    def dfs(self, root, level, nodes):
        nodes.append([level, root.val])

        if root.left:
            self.dfs(root.left, level+1, nodes)
        if root.right:
            self.dfs(root.right, level+1, nodes)



# @lc code=end

