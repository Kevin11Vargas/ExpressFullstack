const mysql = require('mysql');

//set database connection credentials
const config = {
    user: 'root',
    password: '', //lo cambie, aqui no hiba nada y en el usuario era root
    database: 'api',
host:'localhost'
};
const pool = mysql.createPool(config)
//create a MySQL pool
//const pool = mysql.createPool(config);

//Export the pool
module.exports = pool;