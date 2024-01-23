// here we createElement in html
 const h1=document.createElement("h1");
 console.log(h1);
 //add prop in h1 such as class id etc
 //set classname
 h1.className='one';
 h1.id=Math.random()*10; // in this line genrate random id 

 // both are same set to set innerText
 //h1.innerText="chai aur code";
 let addText=document.createTextNode("chai aur code"); // bot
 h1.appendChild(addText);

 //add in html document
 document.body.appendChild(h1)  