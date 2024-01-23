function printHello(){
    console.log("hello");
}
printHello();


// function with arguments
function sum(a,b){
    return a+b;
}
 let r=sum(2,1);
 console.log(r);
 console.log(sum(3,4));



 // create function that accept name and print name 
 function printName(name,age){
    console.log(`name ${name}`);
    console.log(`age ${age}`);
 }
 printName("megharaj",23);



//block scope
function scope(){
    let x=10;
    console.log(x);
}
// console.log(x); it will give error because you access in outside
scope();





//lexcical scope
 let greet="namste";
  function outside(){
    let greet="hello";
     function inside(){
      console.log("inside function",greet);
     }
     inside();
  }
  console.log("global scope",greet);
  outside();




  // nameless function function store in variable
let mul=function(a,b){
 return a*b;
}
 console.log(mul(2,2));





 // higher order function
 function multipleGreet(fuun,n){
   for(let i=1;i<=n;i++){
    fuun();
   }
 }
 let sayHello=function(){
  console.log("hello");
 }
 multipleGreet(sayHello,2)




 // return a function
  function oddoreven(request){
    if(request=="odd"){
      let odd=function(n){
        console.log(!(n%2==0));
      }
      return odd;
    }
    else if(request=="even"){
      let even=function(n){
        console.log(n%2==0)
      }
      return even;
    }
  }
  let request="odd";
  let func=oddoreven(request);
  console.log(func(3));


  //hosting
   console.log(h);
   var h=99;

   //arrow function
   const sum=(a,b)=>{
    console.log(a+b)
   }
   sum(10,20);