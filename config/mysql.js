
import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

db.connect((error) =>{
    if (error) {
        console.log("db connection failed.");
        console.log(error);
        
    } else{
        console.log("DB connected succesfully..");        
    }
});

export default db;

