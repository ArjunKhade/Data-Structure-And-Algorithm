package string;

public class ReverseString {

	public static void main(String[] args) {
		System.out.println(reverseString("hello"));
		System.out.println(reverseString1("hello"));
	}
	
	public static String reverseString(String s) {
		char [] arr = s.toCharArray();
		int n = s.length();
		int mid = n/2;
		
		for(int i = 0; i<mid; i++) {
			char temp = arr[i];
			arr[i] = arr[n-1-i];
			arr[n-1-i] = temp;
		}
		 
		return new String(arr);
	}
	
	public static String reverseString1(String s) {
		 char[] arr = s.toCharArray();
		 int left = 0;
		 int right = s.length()-1;
		 
		 while(left < right) {
			 char temp = arr[left];
			 arr[left] = arr[right];
			 arr[right]=temp;
			 
			 left++;
			 right--;
		 }
		 
		return new String(arr);
	}
	
	

}
