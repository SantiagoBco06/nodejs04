/**
 *
 */

//  const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const porHacer = require('./to-do/to-do');
const colors = require('colors');

let comando = argv._[0];

 switch(comando){
    case 'crear':
        let tarea = porHacer.crear( argv.descripcion);
        console.log(tarea);
    break;
    case 'listar':
        let listado = porHacer.getListado();
        for( let tarea of listado){
            console.log('===========Por Hacer==========='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ',tarea.completado);
            console.log('==============================='.green);
        }
    break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        if( actualizado ){
            console.log(`La tarea "${argv.descripcion}" se actualizo`.green);  
        } 
    break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        if( borrado ){
            console.log(`La tarea "${argv.descripcion}" se ha borrado`.green);  
        } else 
            console.log(`La tarea "${argv.descripcion}" NO SE HA BORRADO`.green);  
    break;

    default:
        console.log('Comando no conocido');
 }
