
let jewels = "aA"
let stones = "aAAbbbb"
//Output: 3

console.log(numJewelsInStones(jewels, stones));

function numJewelsInStones(jewels, stones){
    let set = new Set();
    for (let i = 0; i < jewels.length; i++) {
       set.add(jewels[i]);
    }

    let count = 0;
    for(let j=0; j<stones.length; j++){
        if(set.has(stones[j]))
            ++count;
    }

    return count;
}
