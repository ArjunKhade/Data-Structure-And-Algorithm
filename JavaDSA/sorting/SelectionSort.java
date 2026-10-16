
import java.util.Arrays;

public class SelectionSort {

// selection sort time complexity On^2 , Unstable because order of equal elements chaged after sorting 
    public static void main(String[] args) {
        int [] arr = new int[]{5,6,3,4,2,1};
        selectionSort(arr);
        System.out.println(Arrays.toString(arr));
    }


    public static void selectionSort(int arr[]){
        int n  = arr.length;
        int minIndex;
        for (int i = 0; i < n-1; i++) {
            minIndex = i;
            for (int j = i+1; j < n; j++) {
                if ( arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }

            if(minIndex != i){
                int temp = arr[i];
                arr[i] = arr[minIndex];
                arr[minIndex] = temp;
            }

        }

    }

}