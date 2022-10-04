const express = require ('express');
const app=express();
const path = require('path');
const port = 3001;

// app.get("/",(req,res)=>{
//     res.send("Serveris runiung");
// })
app.listen(port,function(){
    console.log(`Port ${port} is running`);
})
console.log(path.join(__dirname,'../public'));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'../public/index.html'));
})