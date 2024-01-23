
// in this code we try to go another page but there is no another page

// let form=document.querySelector(".abc");
// console.dir(form);
// form.addEventListener("submit",function(){
//     console.log("form submitted")
// });

// in this code we not go to another page 
// preventDefault stop action 
let f=document.querySelector("#second")
console.dir(f)
f.addEventListener("submit",function(event){
    event.preventDefault();
    alert("form submitted")
})