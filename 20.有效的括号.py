#coding=utf-8
# @lc app=leetcode.cn id=20 lang=python3
#
# [20] 有效的括号
#

# @lc code=start
class Solution:
    def isValid(self, s: str) -> bool:
        if not s:
            return True
        if len(s) % 2 == 1:
            return False

        arr = list()
        chars = {')': '(', '}': '{', ']': '['}

        for char in s:
            if char not in chars:
                arr.append(char)
            else:
                if len(arr) > 0:
                    if arr.pop() != chars[char]:
                        return False
                else:
                    return False

        if len(arr) == 0:
            return True
        return False
# @lc code=end

ins = Solution()
s = '(]'
print(ins.isValid(s))

