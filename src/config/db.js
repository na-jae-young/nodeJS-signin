const mysql = require('mysql');

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'nah0101',
    password : 'cjdruf0984~',
    database : 'login'
});

db.connect();
module.exports = db;
