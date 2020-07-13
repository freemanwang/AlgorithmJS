#
# @lc app=leetcode.cn id=1 lang=python3
#
# [1] 两数之和
#

# @lc code=start
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        '''
        双指针法
        '''
        length = len(nums)
        if length < 2:
            return 
        
        val2idx = {}
        for (index, value) in enumerate(nums):
            val2idx[value] = index
            
        nums.sort()
        left = 0
        right = length - 1

        while nums[left] + nums[right] != target:
            if nums[left] + nums[right] > target:
                right -= 1
            elif nums[left] + nums[right] < target:
                left += 1
        if left != right:
            return [val2idx[nums[left]], val2idx[nums[right]]]
        return []
# @lc code=end

