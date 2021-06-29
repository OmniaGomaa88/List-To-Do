const { request, response } = require("express");
const express = require("express");
// créer routeur un comboson express
const routeur = express.Router();


const listController=require("../controllers/listsController")
// on ecrir tout les routes que on veut le routeur les envoyer à la controller
// le router contien method http et url 
// le url ici c'est le  controller qui vas le gérer
routeur.get("/", listController.findAll)
routeur.get("/lists/:id",listController.findOne)
// 
// ...................................
routeur.post("/lists/:listId",listController.addTahce)
routeur.get("/tache/:id",listController.findTacheDétail)
routeur.post("/list",listController.addList)
routeur.get("/UpdateFini/:id",listController.UpdateTacheFini)
//delet list
routeur.get("/DeletList/:id",listController.DeleteList)


// créer module local de le routeur
module.exports = routeur;
