let form=document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault()
    let inp=document.querySelector("input");
    console.dir(inp);
    console.log(inp.value)// value is in the inp object and when you insert value in enterr name it will print in console
})

let con=document.querySelector(".container");
 con.addEventListener("submit",function (event){
    event.preventDefault();
    let inpp=document.querySelector(".input")
    let pass=document.querySelector(".pass")
    console.log(inpp.value)
    console.log(pass.value);
    
 })

 // another way 
 let formm=document.querySelector(".container1");
 formm.addEventListener("submit",function(event){
    event.preventDefault();
    let user=this.elements[0];
    let pass=this.elements[1];
    console.log(user.value);
    console.log(pass.value)
 })