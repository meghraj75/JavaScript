let inp=document.querySelector("input");
 inp.addEventListener("keydown",function(){  // when 
    console.log("key was pressed");
 });

 let inpp=document.querySelector("input");
 inpp.addEventListener("keydown",function (event){  // it will give you key board event that in inside keyboard events lots of propety are avalailabel
   console.log(event);
 });




 // create game when you click on up down arrow key it will show on console that up key was pressed
 let i=document.querySelector(".inputt");
 console.dir(i);
 i.addEventListener("keydown",function(evt){
   console.log(evt.code);
   if(evt.code=="ArrowUp"){
      console.log("character mv forward");
   }
   else if(evt.code=="ArrowDown"){
      console.log("character mv forward");
   } 
   else if(evt.code="ArrowLeft"){
      console.log("character mv left");
   }
   else if(evt.code="ArrowRight"){
      console.log("character move right");
   }
 });