let para=document.querySelector("p");

para.addEventListener("click",function(){
  console.log(this); // it will print all para elemnt
  console.dir(this); // it will print obj of para
})



let h1=document.querySelector("h1");
h1.addEventListener("click",changecolor);
function changecolor(){
  console.dir(this);
  this.innerText="headin text change when we click on heading";  
}