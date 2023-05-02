//cargue la conexion del grupo MySQL
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