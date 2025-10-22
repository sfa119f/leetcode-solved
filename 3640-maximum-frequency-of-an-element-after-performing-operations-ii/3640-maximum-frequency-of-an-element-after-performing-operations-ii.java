class Solution {
    class Helper {
        private int[] nums;
        private int k;
        private int numOperations;
        private int n;
        private Map<Integer, Integer> numFreq = new HashMap<>();

        public Helper(int[] nums, int k, int numOperations) {
            this.nums = nums;
            this.k = k;
            this.numOperations = numOperations;
            this.n = nums.length;
            for (int num : nums) {
                numFreq.put(num, numFreq.getOrDefault(num, 0) + 1);
            }
        }

        public int check(int num) {
            int freq = numFreq.getOrDefault(num, 0);
            int lower = lowerBound(num - k);
            int higher = upperBound(num + k);
            return Math.min(numOperations, higher - lower - freq) + freq;
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

    public int maxFrequency(int[] nums, int k, int numOperations) {
        Arrays.sort(nums);
        int n = nums.length;

        Helper helper = new Helper(nums, k, numOperations);
        int res = 1;
        Set<Integer> numSet = Arrays.stream(nums).boxed().collect(Collectors.toSet());
        for (int num : numSet) {
            res = Math.max(res, helper.check(num));
            res = Math.max(res, helper.check(num - k));
            res = Math.max(res, helper.check(num + k));
        }

        return res;
    }
}