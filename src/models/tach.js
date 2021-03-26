const db= require("../db")
// get all tache in the liste
exports.getOne=(id,callback)=>{
    db.query(`SELECT * FROM tache inner join List_de_Tache on List_de_Tache.list_id = tache.list_ID 
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
}