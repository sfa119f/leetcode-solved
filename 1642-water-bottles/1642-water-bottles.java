class Solution {
    private int changeBottles(int emptyBottles, int numExchange) {
        if (emptyBottles < numExchange) {
            return 0;
        }
        return emptyBottles / numExchange + changeBottles(emptyBottles / numExchange + emptyBottles % numExchange, numExchange);
    }

    public int numWaterBottles(int numBottles, int numExchange) {
        if (numBottles < numExchange) {
            return numBottles;
        }
        return numBottles + changeBottles(numBottles, numExchange);
    }
}