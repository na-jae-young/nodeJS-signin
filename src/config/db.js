const mysql = require('mysql');

const db = mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER ,
    port: 3306,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE,
    insecureAuth: true,
});

db.connect();
module.exports = db;
