class Solution {
    public int maxFrequency(int[] nums, int k, int numOperations) {
        Arrays.sort(nums);
        int n = nums.length;

        class Helper {
            private int[] nums;
            private int k;
            private int numOperations;

            public Helper(int[] nums, int k, int numOperations) {
                this.nums = nums;
                this.k = k;
                this.numOperations = numOperations;
            }
    
            public int check(int num) {
                int l = lowerBound(num);
                int h = upperBound(num);
                int ll = lowerBound(num - k);
                int hh = upperBound(num + k);
                int res = (hh - h) + (l - ll);
                return Math.min(numOperations, res) + (h - l);
            }

            private int lowerBound(int target) {
                int left = 0, right = n;
                while (left < right) {
                    int mid = (left + right) / 2;
                    if (nums[mid] < target) left = mid + 1;
                    else right = mid;
                }
                return left;
            }
            
            private int upperBound(int target) {
                int left = 0, right = n;
                while (left < right) {
                    int mid = (left + right) / 2;
                    if (nums[mid] <= target) left = mid + 1;
                    else right = mid;
                }
                return left;
            }
        }

        Helper helper = new Helper(nums, k, numOperations);
        int res = 1;
        for (int i = 0; i < n; i++) {
            res = Math.max(res, helper.check(nums[i]));
            res = Math.max(res, helper.check(nums[i] - k));
            res = Math.max(res, helper.check(nums[i] + k));
        }

        return res;
    }
}