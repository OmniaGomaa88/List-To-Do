
const  {request, response}= require('express')
// recouper le list model
const list= require("../models/list")
const tache=require("../models/tach")

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
exports.findOne=(request,response,)=>{
    const {id}=request.params
    tache.getOne(id,(error,tache)=>{
        if(error){
            response.send(error.massege)
        }
     console.log(tache[0])
        response.render("list.ejs",{tache})
    })
   
}
// function pour afficher Tache ditailes
exports.findTacheDétail=(request,response)=>{
const {id}=request.params
tache.TacheDétail(id,(error,tache)=>{
    if(error){
        response.send(error.message)
    }
    response.render("tach.ejs",{tache})
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
// DeletList
exports.DeleteList=(Request,response,next)=>{
    const {id}=Request.params
    console.log(id)
    list.DROPList(id,(error,list)=>{
        if (error) {
            response.send(error.message);
        }

        response.redirect("/");
    })
}
// function pour ajouter tache
exports.addTahce=(request, response)=>{
    const tach =request.body.tach
    tache.insertTache(tach,(error,tache)=>{
        if (error) {
            response.send(error.message)
            
        }
        response.redirect("/lists/:id");
    })
}