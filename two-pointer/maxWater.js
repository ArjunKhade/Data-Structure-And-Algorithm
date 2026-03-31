
let height = [1,8,6,2,5,4,8,3,7]

console.log(maxArea(height));

function maxArea(height){
    let i=0;
    let j= height.length-1;
    let maxArea = 0;
    while(i<j){
        let area = Math.min(height[i], height[j])* (j-i);
        maxArea = Math.max(maxArea, area);
        if(height[i]>height[j]){
            --j;
        }else{
            ++i;
        }
    }
    return maxArea;
}