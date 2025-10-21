class Solution {
    public int maxFrequency(int[] nums, int k, int numOperations) {
        int max = Arrays.stream(nums).max().getAsInt();
        int n = max + k + 1;
        int[] numCount = new int[n];
        for (int num : nums) numCount[num]++;

        int[] preSum = new int[n];
        preSum[0] = numCount[0];
        for (int i = 1; i < n; i++) {
            preSum[i] = preSum[i - 1] + numCount[i];
        }

        int res = 0;
        for (int i = 0; i < n; i++) {
            if (numCount[i] == 0 && numOperations == 0) continue;
            int left = Math.max(0, i - k);
            int right = Math.min(n - 1, i + k);
            int total = preSum[right] - (left > 0 ? preSum[left - 1] : 0);
            int adj = total - numCount[i];
            int tempRes = numCount[i] + Math.min(numOperations, adj);
            res = Math.max(res, tempRes);
        }

        return res;
    }
}