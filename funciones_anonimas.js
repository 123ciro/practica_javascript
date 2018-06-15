
function sumar (x,y,msj){
    let sumar = x+y;
    msj('FUNCIONO')
    return sumar;
}

// function mensaje (texto){

//     console.log(texto)
// }


//funcion anonima primera forma
/*console.log(  " El resultado de la suma es:  "+sumar(1,2,function(texto){
    console.log(texto);
}
));*/


//funcion anonima segunda forma (en esta utilizamos la funcion flecha)
/*
console.log(  " El resultado de la suma es:  "+sumar(1,2, (texto) =>{
    console.log(texto);
}));
*/

//otra forma de la funcion flecha utilizando directamente la funcion flecha
//directamente asigna y retorna e imprime el mensaje

console.log(  " El resultado de la suma es:  "+sumar(1,2, texto => console.log(texto)));

