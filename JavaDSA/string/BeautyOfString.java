
public class BeautyOfString {

    public static void main(String[] args) {
       String s = "aabcb";
        // Output: 5
       System.out.println(beautySum(s));
    }

    public static int beautySum(String s) {
        int sum = 0;
        for (int i = 0; i < s.length(); i++) {
            int[] freqArray = new int[26];
            for (int j = i; j < s.length(); j++) {
                int index = s.charAt(j) - 'a';
                freqArray[index]++;
                int max = 0;
                int min = Integer.MAX_VALUE;
                for (int k = 0; k < 26; k++) {
                    if (freqArray[k] > 0) {
                        max = Math.max(freqArray[k], max);
                        min = Math.min(freqArray[k], min);
                    }
                }
                sum += (max - min);
            }
        }
        return sum;
    }

}
