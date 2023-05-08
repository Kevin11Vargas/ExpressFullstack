//cargue la conexion del grupo MySQL
const { request, response } = require('express');
const pool= require('../data/config');

//ruta de la app
const router=app => {
    //mostrar mensaje de bienvenida de root 
    app.get('/', (Request, response)=>{
        response.send({
            message:'Bienvenido a Node.js Express REST API! '
        });
    });
    //Mostrar todos los Usuarios 
    app.get('/users',(Request,response) =>{
        pool.query('SELECT * FROM users',(error,result)=>{
            if (error) throw error;
            response.send(result);
        });
    });
}
//exportar el router
module.exports=router;

//mostrar un solo usuario por ID
app.get('/users/:id', (request,response) =>{
    const id =request.params.id;
    pool.query('SELECT * FROM users WHERE id= ?', id,(error, result) => {
        if (error) throw error;
        response.send(result);
    });
});

//agregar un nuevo usuario 
app.post('/users', (request,response) => {
    pool.query('INSERT INTO users SET ?', request.body, (error, result) => {
        if (error) throw error;

        response.status(201).send(`User added with ID: ${result.insertId}`);
    });
});

app.put('/users/id',(request, response) => {
    const id= request.params.id;

    pool.query('UPDATE users SET ? WHERE id = ? ',[request.body, id], (error, result)=>{
        if (error) throw error;

        response.send ('User updated successfully. ');
    }); 
});

//eliminar un usuario 
app.delete('/users/:id',(request, response) => {
    const id = request.params.id;
    pool.query('DELETE FROM users WHERE ID=?', id,(error, result)=>{
        if (error) throw error;
        response.send('Users delated.');
    });
});