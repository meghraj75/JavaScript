// in this tutorial we will learn most asked method in js
  //map same as foreach loop but it return value and store in array
  let num=[1,2,3,4];
  let double=num.map(function (el){
    return el*el;
  })
  console.log(double);// it return square of 1 and 2 and 3 and 4 [1, 4, 9, 16]
 

  // filter return new array if callback is true print element  , if callback is false return no elemtcd
  let a=[1,2,3,4,5,6,7,8,9,10];
  let even=a.filter((num)=>{
    return num%2==0;
  })
  console.log(even) // it will retun only even number


  //every return true if every all array elemts give true for function or else false
  //it work as logial and
   let num1=[1,2,3,4];
   let even_=num.every((el)=>{
    return el%2==0;
   })
   console.log(even_);// it retur false because all array elment no even

  let num2=[2,4,6];
  let _even=num2.every((el)=>{
    return el%2==0;
  })
  console.log(_even);// it return true because all elemt is true



//some work as logical or either true or false
let num3=[1,3,5];
let odd=num3.some((el)=>{
  return el%2==0;
});
console.log("some",odd);

//reduce reduce array in single value 
let num4=[1,2,3,4];
let red=num4.reduce((res,el)=>{  // (here res accumulator and el is element)
 return  res+el; // additon on 1+2+3+4
});
console.log(red);

let num5=[10,20,30];
let u=num5.reduce((rs,el)=>{
  return rs*el;
}
);
console.log(u) //6000



//spread 
// iterate all value one by one
let arr=[10,20,30,40,50]
console.log(...arr); // 10 20 30 40 50
let ans=Math.min(...arr);
console.log(ans);//10


// array literal 
let arrr=[10,20,30,40]
let newarr=[...arrr];
console.log("copy arrr and store in newarr",newarr);


//spread with object
 let data={
  name:"raj",
  roll:45
 };

                    // update name
 datacopy={...data,name:"aman"};
 console.log(datacopy);



 