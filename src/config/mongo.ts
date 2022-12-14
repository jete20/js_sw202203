import { getConnection } from "@models/mongodb/MongoDBConn";

export const initMongo = (next)=>{
    getConnection().then(
        ({connection: _conn, db: _db})=>{
            console.log("MONGO SUCCESS");
            next();
        }
    ).catch((error)=>{
        console.log("MONGO ERROR: ", error);
        process.exit(1);
    });
}