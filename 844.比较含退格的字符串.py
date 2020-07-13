#
# @lc app=leetcode.cn id=844 lang=python3
#
# [844] 比较含退格的字符串
#

# @lc code=start
class Solution:
    def backspaceCompare(self, S: str, T: str) -> bool:
        # 都空，相等
        if not S and not T:
            return True
        # 一个空一个非空，不想等
        if not S or not T:
            return False
        
        ss = self.input(S)
        tt = self.input(T)
        if ss == tt:
            return True
        return False

    def input(self, s: str):
        if not s:
            return
        stack = list()
        for char in s:
            if char == '#':
                if len(stack) > 0:
                    stack.pop()
            else:
                stack.append(char)
        return ''.join(stack)




# @lc code=end

s = "y#fo##f"
t = "y#f#o##f"
ins = Solution()
print(ins.backspaceCompare(s, t))