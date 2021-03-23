console.log("hi")
// créer veriable qui a le packeg express
const express  = require("express");
// ...
const ejs=require('ejs');
// créer server de express
const app = express();
app.engine("ejs",ejs.renderFile);
app.set("views","./src/views/")
app.get("/",(request,response)=>{
    response.render("index.ejs")
})

app.listen(8080,()=>{
   console.log("hello")
})