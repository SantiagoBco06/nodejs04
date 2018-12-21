/**
 * 
 */

 const fs = require('fs');

 let listadoPorHacer = [];

 const cargarDB = () => {    
     try{
        listadoPorHacer = require('../db/data.json');
     }catch (error) {
        listadoPorHacer = [];
     }
 };

 const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex( (tarea) =>  tarea.descripcion === descripcion );
    if( index >= 0 ) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }
    return false;
 }

 const borrar = ( descripcion ) => {
    cargarDB();
    let index = listadoPorHacer.findIndex( (tarea) =>  tarea.descripcion === descripcion );
    if( index >= 0 ) {
        listadoPorHacer.splice(index,1);
        guardarDB();
        return true;
    }
    return false;
 }

 const getListado = () => {    
     cargarDB();
     return listadoPorHacer;
 };

 const guardarDB = () => {
    return new Promise( (resolve, reject ) => {
        let data = JSON.stringify( listadoPorHacer );
        fs.writeFile(`db/data.json`, data, (err) => {
          if (err) reject(err);
          resolve(`DataBase actualizada.`);
        });       
    })
 };

 const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    }
    listadoPorHacer.push( porHacer);
    guardarDB();
    return porHacer;
 };

 module.exports = {
     crear,
     getListado,
     actualizar,
     borrar,
 }


