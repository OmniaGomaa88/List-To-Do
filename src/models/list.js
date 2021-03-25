// requir le fichier qui contien toute le configration de contacter àla base de donnée
const db= require("../db")
// exporter function getAll 
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

