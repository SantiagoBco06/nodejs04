/**
 * 
 */

const opcionesConfiguracion = {        
    descripcion: {
        demand:true,
        alias:'d'
    },
    completado:{
        demand:false,
        alias:'c',
        default:true,
    }
};

const argv = require('yargs')
.command('crear', 'Crea un elemento por hacer.',opcionesConfiguracion)
.command('actualizar','Actualiza el estado completado de una tarea',opcionesConfiguracion)
.command('listar','Listar las tareas almacenadas con sus respectivos estados.')
.command('borrar','Borrar una tarea por medio de su descripción',opcionesConfiguracion)
.help()
.argv;

module.exports = {
    argv
};
