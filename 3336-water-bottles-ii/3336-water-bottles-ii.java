class Solution {
    private int exchangeBottles(int numEmpty, int numExchange) {
        if (numEmpty < numExchange) {
            return 0;
        }
        int count = 0;
        while (numEmpty >= numExchange) {
            numEmpty -= numExchange++;
            count++;
        }
        return count + exchangeBottles(count + numEmpty, numExchange);
    }

    public int maxBottlesDrunk(int numBottles, int numExchange) {
        return numBottles + exchangeBottles(numBottles, numExchange);
    }
}