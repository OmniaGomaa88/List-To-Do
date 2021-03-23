const express = require("express");
const routeur = express.Router();
// on ecrir tout les routes que on veut le routeur les envoyer à la controller
routeur.get("/",(request,response)=>{
    response.render("index.ejs")
});
// créer module local de le routeur
module.exports = routeur;
