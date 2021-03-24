
const {response}= require('express')
const list= require("../models/list")

exports.findAll= (request,response) =>{
    list.getAll((error,list)=>{
        if (error){
            response.send(error.massege)
        }
        console.log(list);
        response.render("index.ejs",{list})
    })

}