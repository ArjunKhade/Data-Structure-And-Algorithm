
// function func(){
//     console.log("Namaste!");
//     func();
// }

// func();

// printNum(5);

// function printNum(num){
//     if(num == 0) return;
//     console.log(num);
//     num = num -1;
//     printNum(num);
// }


//print the number upto the given number
let n = 20;
function printNums(x){
    if(x>n) return;
    console.log(x);
    // x = x + 1;
    printNums(++x);
}

printNums(1);