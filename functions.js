
//functions 
function printHelloWorld(){
    console.log("Hello World")
}

printHelloWorld();

function printName(name){
    console.log(name)
}

printName("Arjun");



function sum(a, b){
    let add = a+b;
    console.log(add);
}

sum(10,20)


//return the value from functions
function square(x){
    let result = x*x;
    return result;
}

let result = square(2);

console.log(result);


//create a function which accepts the age and tells whether a person is elligible ro vote or not

function elligibleToVote(age){
    if(age < 0){
        console.log("Invalid Input");
    }
    else if(age < 18){
        console.log("Not Eligible to vote");
    }else{
        console.log("Eligible to Vote.");
    }
}

elligibleToVote(10);
elligibleToVote(18);
elligibleToVote(20);
elligibleToVote(-1);

//create a function to check if number is event or odd

function isEvenOdd(num){
    let rem = num % 2;
    if( rem == 0){
        console.log("Even");
    }else{
        console.log("Odd");
    }
}

isEvenOdd(6);
isEvenOdd(5);
isEvenOdd(-6);

