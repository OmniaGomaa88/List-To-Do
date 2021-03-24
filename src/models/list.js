const db= require("../db")

// function pour fair requit sql
exports.getAll = (callback) => {
    db.query("SELECT * FROM List_de_Tache;", (error, result) => {
      if (error) {
        console.log("error: ", error);
        callback(error, null);
        return;
      }
  
      callback(null, result);
    })
  }
// /exports.getAll=(callback){
// /    db.query("SELECT * FROM List_de_Tache",(error,result)=>{
// /    if(error){
// /        console.log("error:",error)
// /        callback(error,null)
// /        return;
// /    }
// /    console.log("lest de tache",result)
// /    callback(null,result)
// /})
// /}
// /}
// /
