
//1 créer veriable qui a le packeg express
//2 requist le ejs..motuer pour generet les page
//3 créer server avec express
//4 l'engine de le server serait ejs
//5 le views de le server est dans le dosier views !
// 6 le server lesten à port 8080
// 7 utiliser le model routeur,par déclarer router avec le url de le routeur
// ........................................................
const express  = require("express");

const ejs=require('ejs');
const routeur= require("./routers")
const server = express();
 

server.engine("ejs",ejs.renderFile);

server.set("views","./src/views")
 server.use(routeur)
server.listen(8080,()=>{
   console.log("hello")
})