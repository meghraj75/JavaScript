let parent=document.querySelector('.parent');
console.log(parent);
console.log(`childnode counnt${parent.childElementCount}`); // here we how many childern element in child
// to get childern
//console.log(parent.children);// here we get html collection
// in html collection elements store in array
// console.log(parent.children[0].innerHTML);//monday

 // in this loop we get alll value 
 for(let i=0;i<parent.children.length;i++){
    console.log(parent.children[i].innerHTML)
 }

 //change styling
parent.children[1].style.color = "orange";

// get firstchildern
// console.log(parent.firstElementChild); // here get monday
// console.log(parent.lastElementChild);  // here get sunday obj

let dayOne=document.querySelector(".day");
console.log(dayOne);
console.log(dayOne.parentElement);
console.log(dayOne.nextElementSibling);// we go next elemnt that is tuesday
console.log(dayOne.childElementCount)// here we get 0 beacause dayOne has no child element

//child nodes
// nodelist
// in this all node are print in this order
//0
// text  this is line break after first element
// 1
// div.day
// 2
// text
// 3
 // div.day
// 4
 // text
// 5
 // div.day
// 6
// : 
// text
// 7
// : 
// div.day
// 8
// : 
// text
// 9
// : 
// div.day
// 10
// : 
// text
// 11
// : 
// div.day
// 12
// : 
// text
// 13
// : 
// div.day
console.log("nodes",parent.childNodes);



 