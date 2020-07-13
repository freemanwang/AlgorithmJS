#
# @lc app=leetcode.cn id=15 lang=python3
#
# [15] 三数之和
#

# @lc code=start
class Solution:
    '''
    bruce
    T = n^3, S = n
    '''
    # def threeSum1(self, nums: List[int]) -> List[List[int]]:
    #     if len(nums) <= 2:
    #         return []
    #     if len(nums) == 3:
    #         if nums[0] + nums[1] + nums[2] == 0:
    #             return [nums]
    #     length = len(nums)
    #     res = []

    #     for i in range(length -2):
    #         for j in range(i + 1, length -1):
    #             for k in range(j + 1, length):
    #                 if nums[i] + nums[j] + nums[k] == 0:
    #                     tmp = [nums[i], nums[j], nums[k]]
    #                     tmp.sort()
    #                     # set 保证顺序不影响
    #                     if tmp not in res:
    #                         res.append(tmp)
    #     # res 为空
    #     if not res:
    #         return []
        
    #     return res

    # def threeSum(self, nums: List[int]) -> List[List[int]]:
    #     '''
    #     哈哈哈，上面的在一个长的test case超时了
    #     优化一下，2层循环，T = n^2 , S = n
    #     好吧，再次超时，不过多通过了几个case。。。。
    #     '''
    #     length = len(nums)
    #     if length <= 2:
    #         return []
    #     if length == 3 and sum(nums) == 0:
    #         return [nums]

    #     dic1 = {}
    #     res = []
    #     for i in range(length - 2):
    #         for j in range(i + 1, length - 1):
    #             if -sum([nums[i], nums[j]]) in nums[j+1:]:
    #                 tmp = [nums[i], nums[j], -(nums[i]+nums[j])]
    #                 tmp.sort()
    #                 if tmp not in res:
    #                     res.append(tmp)
    #     return res
    

    def threeSum(self, nums: List[int]) -> List[List[int]]:
        length = len(nums)
        if length <= 2:
            return []
        if length == 3 and sum(nums) == 0:
            return [nums]

        nums.sort()

        if 
        
        


    
        
# @lc code=end

