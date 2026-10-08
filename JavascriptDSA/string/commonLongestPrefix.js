
let strs = ["flower","flow","flight"]
// Output: "fl"

console.log(commonLongestPrefix(strs));

function commonLongestPrefix(strs){
    let x=0;
    //compare with first string
    while(x < strs[0].length){
        let ch = strs[0][x];
        //loop throgh other string to compare index letter
        for(let i=1; i<strs.length; i++){
            if(ch !== strs[i][x] || x == strs[i].length){
                return strs[0].substring(0,x);
            }
        }
        ++x;
    }


    return strs[0];
}