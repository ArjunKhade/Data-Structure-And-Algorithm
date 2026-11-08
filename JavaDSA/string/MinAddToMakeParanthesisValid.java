public class MinAddToMakeParanthesisValid {
    
    public static void main(String[] args) {
        String s = "())";
        // Output: 1
        System.out.println(minAddToMakeValid(s));
    }

     public static  int minAddToMakeValid(String s) {
        int open = 0;
        int close = 0;
        for(char a :  s.toCharArray()){
            if(a == '('){
             open++;
            }else{
                if(open > 0){
                    open--;
                }else{
                     close++;
                }
                
            }
        }

        return open+close;
    }
}
