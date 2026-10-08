
let s = "anagram";
let t = "nagaram";
// Output: true

console.log(isAnagram(s,t))

function isAnagram (s, t) {
    if(s.length !== t.length) return false;
    
    let map = {};

    for(let i=0; i<s.length; i++){
        if(!map[s[i]]){
           map[s[i]] = 1;  
        }else{
           ++map[s[i]];  
        }
    }

     for(let i=0; i<t.length; i++){
        if(map[t[i]]){
           --map[t[i]]; 
        }else{
           return false;
        }
    }

    return true;
};