//for loop
for (let i = 0; i < 5; i++) {
  console.log("Hello");
}

for (let i = 0; i < 10; i++) {
  console.log("Hello"+(i+1));
}

for (let i = 2; i < 10; i=i+2) {
  console.log("Hello"+i);
}

for (let i = 5; i >0; i=i-1) {
  console.log("Hello"+i);
}

//print all even number
let arr = [6,5,8,9,10,16,14,12];
for (let i = 0; i < arr.length; i++) {
    if(arr[i]%2 == 0)
    console.log(arr[i]);    
}