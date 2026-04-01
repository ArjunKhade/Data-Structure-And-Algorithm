let s = "A man, a plan, a canal: Panama";

console.log(validPalindrome(s));

// removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters
// include letters and numbers.
function validPalindrome(s){
    s = s.toLowerCase();
    let filteredString = "";
    let rev = ""

    for(let i=0; i<s.length; i++){
        if((/[a-z0-9]/i.test(s[i]))){
        // if(s[i].match(/[a-z0-9]/i)){
            filteredString = filteredString + s[i];
            rev = s[i] + rev;
        }
    }
    return rev === filteredString;
}