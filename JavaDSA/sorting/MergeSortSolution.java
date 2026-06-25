package sorting;
import java.util.Arrays;
public class MergeSortSolution {

	public static void main(String[] args) {
		int [] arr = {4,5,1,3,9};
		mergeSort(arr);
		System.out.println(Arrays.toString(arr));
	}
	
	
	public static void mergeSort(int [] arr) {
		if(arr == null || arr.length <=1 ) return;
		//find out mid
		int mid  = arr.length /2;
		
		//divide the arrays
		int [] left = Arrays.copyOfRange(arr, 0, mid);
		int []	 right = Arrays.copyOfRange(arr, mid, arr.length);
		
		//call recursive for left
		mergeSort(left);
		
		//call recursive for right
		mergeSort(right);
		
		//conquor the array
		merge(arr, left,right);
	}


	private static void merge(int[] arr, int[] left, int[] right) {
		int i=0, j=0, k=0;
		
		//compare if left/right array element has smaller value then push to arr
		while(i < left.length && j <right.length) {
			if(left[i]<= right[j]) {
				arr[k++] = left[i++];		
			}else {
				arr[k++] = right[j++];
			}
		}
		
		//copy remaining elements from left
		while(i<left.length) {
			arr[k++]=left[i++];
		}
		//copy remaining element from right
		while(j<right.length) {
			arr[k++]=right[j++];
		}	
	}
}
