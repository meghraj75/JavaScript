let btns=document.querySelector(" button");
console.dir(btns);
for(let btn of btns){
    btn.addEventListners("click",sayHello);
    btn.addEventListners("click",say);
}
   function sayHello(){
    alert ("hello ")
   }
    function say(){
        console.log("print in console");
    }