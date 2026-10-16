package searching;

public class LinearSearch {

    public static void main(String[] args) {
        int [] nums = new int[] {1,2,3,4,5};
        System.out.println(linearSearch(nums, 5));
    }

    public static int linearSearch(int [] nums, int target){
        for (int i = 0; i < nums.length; i++) {
            if(nums[i]== target)
                return  i;
        }
        return -1;
    }

}
