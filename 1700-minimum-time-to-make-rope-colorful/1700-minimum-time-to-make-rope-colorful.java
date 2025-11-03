class Solution {
    public int minCost(String colors, int[] neededTime) {
        int result = 0;
        char c = colors.charAt(0);
        int highestTimeNow = neededTime[0];
        for (int i = 1; i < neededTime.length; i++) {
            if (colors.charAt(i) == c) {
                if (highestTimeNow < neededTime[i]) {
                    result += highestTimeNow;
                    highestTimeNow = neededTime[i];
                } else {
                    result += neededTime[i];
                }
            } else {
                c = colors.charAt(i);
                highestTimeNow = neededTime[i];
            }
        }
        return result;
    }
}