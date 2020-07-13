#coding = utf-8
# @lc app=leetcode.cn id=50 lang=python3
#
# [50] Pow(x, n)
#

# @lc code=start
class Solution:
    # def myPow(self, x: float, n: int) -> float:
    #     '''
    #     T = log n
    #     '''
    #     if not n:
    #         return 1

    #     if n < 0:
    #         return 1 / self.myPow(x, -n)  

    #     if n % 2: # 是奇数次幂
    #         return x * self.myPow(x, n-1)
    #     else:
    #         return self.myPow(x * x, n / 2)

    # def myPow(self, x: float, n: input) -> float: #  T = n，n极大时超时
    #     if not n:
    #         return 1

    #     if n < 0:
    #         return 1 / self.myPow(x, -n)
        
    #     if n > 0:
    #         return x * self.myPow(x, n-1)

    def myPow(self, x: float, n: input) -> float: # 非递归
        if not n:
            return 1
        
        if n < 0:
            x = 1 / x
            n = -n
        
        pow = 1

        while n:
            if n % 2:
                pow *= x
                n -= 1
            else:
                pow *= pow
                n /= 2
        return pow


        
# @lc code=end

