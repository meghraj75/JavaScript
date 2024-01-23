// convert  minute to second
function convert(n){
    return n*60;
}
console.log(`this function convert minute to second ${convert(3)}`);


//return the next number of passed integer
const num=(n)=>{
    return n+1;
}
console.log(num(1));


//area of triangle
function tri(b,h){
    return (1/2*b*h);
}
console.log(`area of triangle ${tri(2,3)}`);


// console.log(days(20));
const calage=age=>{
    return age*365;
}
console.log(`here we caluculate age ${calage(20)}`);


//cube of num
// let num1=prompt("enter a number to find cube");
// function cube(){
//     return num1*num1*num1;
// }
// console.log(cube());



//function takes an array and retunr first value
let arr=[10,20,30,40]

function getArr(arr){
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
}
console.log(getArr(arr));


// you giver current and voltage calculate power
let vol=110;
let current=5;
  function power(vol,current){
    return vol*current;
  }
  console.log(`the power is ${power(vol,current)}`);