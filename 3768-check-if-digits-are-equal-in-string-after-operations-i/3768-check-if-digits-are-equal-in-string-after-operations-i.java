class Solution {
    public boolean hasSameDigits(String s) {
        if (s.length() == 2) return s.charAt(0) == s.charAt(1);

        String newS = "";
        for (int i = 0; i < s.length() - 1; i++) {
            newS += (Character.getNumericValue(s.charAt(i)) + Character.getNumericValue(s.charAt(i + 1))) % 10;
        }

        return hasSameDigits(newS);
    }
}