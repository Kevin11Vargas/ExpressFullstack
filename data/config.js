const mssql = require('mssql');

//set database connection credentials
const config = {
    server:'LAPTOP-56179T38',
    user: 'kevin',
    password: '1234', //lo cambie, aqui no hiba nada y en el usuario era root
    database: 'api',
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};
const pool = new mssql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('Conectado a la base de datos');
        return pool;
    }).catch(err => {
        console.log('Error en la conexion a base de datos ' + err);
    });

//create a MySQL pool
//const pool = mysql.createPool(config);

//Export the pool
module.exports = pool;