class Solution(object):
    def sortColors(self, nums):
        """
        :type nums: List[int]
        :rtype: None Do not return anything, modify nums in-place instead.
        """
        temp = [0, 0, 0]
        for val in nums:
            temp[val] += 1

        for i in range(0, temp[0]):
            nums[i] = 0
        for i in range(temp[0], temp[0]+temp[1]):
            nums[i] = 1
        for i in range(temp[0]+temp[1], temp[0]+temp[1]+temp[2]):
            nums[i] = 2
        