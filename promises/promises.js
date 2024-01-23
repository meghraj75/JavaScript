function saveToDb(data){
    let internetSpeed=Math.floor(Math.random()*10)+1;
    if(internetSpeed>4){
        console.log("your data was saved",data)
    }
    else{
        console.log("weak connection.data not saaved")
    }
}
// saveToDb("apna college");



function saveToDb(data,success,failure){
    let internetSpeed=Math.floor(Math.random()*10)+1;
    if(internetSpeed>4){
    success();
    }
    else{
       failure();
    }
}
// saveToDb("apna college",()=>{
//     console.log("data was saved"); /// success refer to this line
// },()=>{
//     console.log("weak connection");// failure refer to this line
// });

//multiple function saving data

saveToDb("hello",()=>{
    console.log("data was saved in multiple function 1");
   saveToDb("meghraj narkhede",()=>{
    console.log("data was saved in multiple functionn 2")
   }),()=>{
    console.log("weak connection,data was not saved in multiple function 2")
   }
},()=>{
    console.log("weak connection,data was not saved in 1");
})