
let s = ["h","e","l","l","o"];

reverseString(s);
console.log(s);

function reverseString(s){
    let n = s.length;
    let halfLength = Math.floor(n/2);

    for(let i=0; i<halfLength; i++){
        //swap
        let temp = s[i];
        s[i]=s[n-1-i];
        s[n-1-i]=temp;
    }
}