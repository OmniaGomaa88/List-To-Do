// requir le fichier qui contien toute le configration de contacter àla base de donnée
const db= require("../db")
// exporter function getAll 
// ADD alement dans le database
exports.InsertData=(Data,callback)=>{
  console.log(Data)
db.query(`INSERT INTO List_de_Tache (nom) VALUES ("${Data}");`,(error,result)=>{
if (error) {
  console.log("error: ", error);
  callback(error, null);
  return;
}

callback(null, result);
})
}
// 

exports.getAll = (callback) => {
  // method query pour faire requett sql
    db.query("SELECT * FROM List_de_Tache;", (error, result) => {
      if (error) {
        console.log("error: ", error);
        callback(error, null);
        return;
      }
  
      callback(null, result);
    })
  }
  exports.DROPList=(id, callback)=>{
    db.query(`DELETE FROM List_de_Tache WHERE List_de_Tache.list_id = ("${id}");`, (error,result)=>{
      if(error){
        console.log("error: ", error);
        callback(error, null);
        return;
      }
      callback(null, result);
    })
  }
  

  

