
const {response, request}= require('express')
// recouper le list model
const list= require("../models/list")

exports.findAll= (request,response) =>{
    // utiliser le function getAll qui est créer dans le list modul
    list.getAll((error,list)=>{
        if (error){
            response.send(error.massege)
        }
        console.log(list);
        // render vers le viwe ejs avec le list
        response.render("index.ejs",{list})
    })

}
// function findeOne pour chaque list
exports.findOne=(request,response)=>{
   response.send("ça function")
}