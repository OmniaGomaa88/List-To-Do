const { request } = require("express");
const db= require("../db")
// get all tache in the liste
exports.getOne=(id,callback)=>{
    db.query(`SELECT * FROM tache right join List_de_Tache on List_de_Tache.list_id = tache.list_ID 
    WHERE List_de_Tache.list_id = ${id}`, (error, result) => {
      if (error) {
        console.log("error: ", error);
        callback(error, null);
        return;
      }
   console.log(result)
      callback(null, result);
    })
  }
//   get taches ditails
exports.TacheDétail=(id,callback)=>{
    db.query(`SELECT * FROM tache where tache.ID = ${id}`,(error,result)=>{
        if(error){
            callback(error,null)
            return;
        }
        console.log(result)
        callback(null,result)
    })
    // function add tache
}
// function to add new tache
exports.insertTache=(tach,callback)=>{
db.query( `INSERT INTO tache (Description) VALUES ("${tach}");`,(error,result)=>{
  if(error){
    callback(error,null)
    return;
}
console.log(result)
callback(null,result)
})
}
