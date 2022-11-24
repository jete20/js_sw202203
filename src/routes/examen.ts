const MongoDB = require('../../utilities/db');
const ObjectId = require('mongodb').ObjectID;
let db;
let direccionesCollection;

(async function(){
    try{
      if (!snippetCollection) {
        db = await MongoDB.getDB();
        snippetCollection = db.collection("direcciones");
      }
    }catch(ex){
      console.log(ex);
      process.exit(1);
    }
})();

module.exports.getEjercicio1 = async ()=&gt;{
  try {
		/*Aquí su codigo*/
		/* Sacar los documentos de 10 años pero solo se debe mostrar el nombre y la edad. */
let docsCursor = direccionesCollection.find({edad:10},{nombre:1, edad:1});
		/*-------------*/
    let rows = await docsCursor.toArray()
    return rows;
  } catch(ex){
    console.log(ex);
    throw(ex);
  }
}

module.exports.getEjercicio2 = async ()=&gt;{
  try {
		/*Aquí su codigo*/
		/*Sacar los 10 documentos que contienen las personas con la edad más avanzada ordenados de forma descendiente.*/
    let docsCursor = direccionesCollection.find().sort({edad:-1}).limit(10);
		/*-------------*/
    let rows = await docsCursor.toArray()
    return rows;
  } catch(ex){
    console.log(ex);
    throw(ex);
  }
}