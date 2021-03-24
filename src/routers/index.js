const express = require("express");
const routeur = express.Router();

const listController=require("../controllers/listsController")
// on ecrir tout les routes que on veut le routeur les envoyer à la controller
routeur.get("/", listController.findAll)

// créer module local de le routeur
module.exports = routeur;
