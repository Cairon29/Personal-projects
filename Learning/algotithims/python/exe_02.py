class Solutions:
    @staticmethod
    def woSum(self, nums, target) -> list[int]:
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """

        for i in range(len(nums)):
            for j in range(len(nums)):
                a = nums[i]
                b = nums[j]
                
                if (a + b) == target:
                    return [a, b]