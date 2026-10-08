let s = "(()())(())";
// Output: "()()()"

console.log(removeOuterParentheses(s));
console.log(removeOuterParentheses1(s));




//using level T O(n) S O(1)
function removeOuterParentheses1(s){
    let level = 0;
    let ans = '';

    for(let i=0; i<s.length; i++){
        if(s[i] === '('){
           level++;
           ans+= (level>1)? s[i]: '';
        }else{
            ans+= (level>1)? s[i]: '';
            --level;
        }
    }
    return ans;
}

//using stack T O(n) S O(n)
function removeOuterParentheses(s){
    let stack = [];
    let ans = '';

    for(let i=0; i<s.length; i++){
        if(s[i] === '('){
           stack.push(s[i]);
           if(stack.length>1){
            ans+=s[i];
           }
        }else{
            if(stack.length>1){
                ans+=s[i];
            }
             stack.pop();
        }
    }
    return ans;
}