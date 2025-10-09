class Solution {
    public long minTime(int[] skill, int[] mana) {
        int n = skill.length;
        int m = mana.length;

        int[] preSumSkill = new int[n];
        preSumSkill[0] = skill[0];
        for (int i = 1; i < n; i++) {
            preSumSkill[i] = preSumSkill[i - 1] + skill[i];
        }

        long[] tempDone = countTime(preSumSkill, mana[0]);
        for (int i = 1; i < m; i++) {
            long[] needTime = countTime(preSumSkill, mana[i]);
            int baseOnIdx = 0;
            for (int j = 1; j < n; j++) {
                if (tempDone[baseOnIdx] + needTime[j - 1] - (baseOnIdx == 0 ? 0 : needTime[baseOnIdx - 1]) < tempDone[j]) {
                    baseOnIdx = j;
                }
            }
            long startTime = tempDone[baseOnIdx] - (baseOnIdx == 0 ? 0 : needTime[baseOnIdx - 1]);
            for (int j = 0; j < n; j++) {
                tempDone[j] = startTime + needTime[j];
            }
        }
        return tempDone[n - 1];
    }

    private long[] countTime(int[] preSum, int mana) {
        long[] res = new long[preSum.length];
        for (int i = 0; i < preSum.length; i++) {
            res[i] = (long) preSum[i] * mana;
        }
        return res;
    }
}