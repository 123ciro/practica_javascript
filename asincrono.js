// funciones sincronas y asincronas


//javascript es un lenguaje sincrono de por si y ejecuta linea por linea 
//Ejempli sincrono
// for (i=0 ; i<=10000000;i++){
//     console.log(i)
// }
//en cambio tiene su forma de hacer asincrona
//ejemplo asincrono
//en el setTImeout recibe 2 parametros, la funcion anonima y el tiempo en el que se ejecutara

setTimeout(function(){
    console.log('respuesta');
}, 3000)

console.log('Hola mundo')
