package sorting;
import java.util.Arrays;

public class BubbleSort {
	
	public static void main(String[] args) {
		int [] arr = {4,5,1,3,9};
		int [] copy = Arrays.copyOf(arr, arr.length);
		bubbleSort(copy);
		
		System.out.println("Original->"+Arrays.toString(arr));
		System.out.println("After Sorting->"+Arrays.toString(copy));
	}

	public static void bubbleSort(int [] arr) {
		//an array of n elements, Bubble Sort needs at most n - 1 passes.
		for(int i=0; i<arr.length-1; i++) {
			boolean isSwapped = false;
			//-i skips the elements that are already sorted at the end.
			for(int j=0; j<arr.length-1-i; j++) {
				if(arr[j] > arr[j+1] ) {
					//swap
					int temp = arr[j];
					arr[j] = arr[j+1];
					arr[j+1] = temp;
					isSwapped = true;
				}
			}
			//If no swaps occur in a pass, the array is already sorted.
			//Reduces the best-case time complexity from O(n²) to O(n).
			if(!isSwapped) {
				break;
			}
		}
		
	}
	


}
