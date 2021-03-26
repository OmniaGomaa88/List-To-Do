
const  {request, response}= require('express')
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
// function findeOne pour chaque list url id
exports.findOne=(request,response)=>{
    const {id}=request.params
    list.gitOne(id,(error,tache)=>{
        if(error){
            response.send(error.massege)
        }
     console.log(tache)
        response.render("list.ejs",{tache})
    })
   
}
// function pour ajouter data
exports.addList=(request,response)=>{
    console.log(request.body)
    list.InsertData(request.body.field1, (error, tasks) => {
        if (error) {
            response.send(error.message);
        }

        response.redirect("/");
    })
}