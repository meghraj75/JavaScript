function hello(){
    console.log("inside hello fun")
    console.log("hello");
}

function demo(){
    console.log("calling hello fun");
    hello();
    
}
console.log("callling demo fun");
demo();
console.log("done,bye");