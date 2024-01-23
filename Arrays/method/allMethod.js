let arr=[10,20,30,40,50];
// push method add element in array last
console.log(arr.push(12));
console.log(arr); // [10, 20, 30, 40, 50, 12]

// pop delete from end and return this num
console.log(arr.pop());
console.log(arr); //[10, 20, 30, 40, 50]

//unshift add to elent in start
console.log(arr.unshift(23));
console.log(arr); // [23, 10, 20, 30, 40, 50]


//shift delete elemt from start and return it
console.log(arr.shift());
console.log(arr); // [10, 20, 30, 40, 50]


//indexOf return index
console.log(arr.indexOf(20)); // it return 1


//includes serch for a value it return true or false 
 console.log(arr.includes(10));// true
 console.log(arr.includes(90))// false


 //concatenation merge 2 array 
 let fruits=["mango","banana","gauva"];
 console.log(arr.concat(fruits)); //[10, 20, 30, 40, 50, 'mango', 'banana', 'gauva']
 console.log(fruits.concat(arr)); //['mango', 'banana', 'gauva', 10, 20, 30, 40, 50]


 //reverse it will reverse array element
  console.log(arr.reverse());

  //slice copies a portion of array
  let names=["unat","meghraj","mandar","lalit"];
  console.log(names.slice(1,3)); // ["megharaj",'mandar'] // last index is excluded
  console.log("not change origin array",names)//not change origin array


  //splice remove or replace or add elemnts in place
  //console.log(names.splice(2));// it will print 2 and 3 index elemnt
 console.log("change original array",names)  


   //sort sort an array in asceding or desceding order
   let days=[
    "tuesday","friday",
    "saturday",
    "sunday"
   ];
   console.log(days.sort());

   let num=[9,4,7,34,12,9,12,88,33,2,4];
   console.log("it will not sort number",num.sort());


   //
   let b=["a","b","c"];
   let arrcopy=b;
   console.log(arrcopy);// it will print element
    console.log(arrcopy.pop("c")); // it will pop c 


    
