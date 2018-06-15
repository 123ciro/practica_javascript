let objA ={

nombre: 'Mario',
edad:22 

}

//console.log(objA);

// el objeto A no pasa ningun valor al objeto B, solo pasa su ubicacion en memorio, siempre
// el objeto A prevalecera ante todo, si cambiamos el objeto b, tambien cambiamos los valores del objeto a 

let objB= Object.assign({},objA) ;

//l object.asiggn ya asigna un valor dentro de la memoria al objetoB, 
//y todo lo que cambiamos, ya pertenece
//al objeto B

//console.log(objB);

objB.nombre = 'Antonio';

console.log("Obj A: " + JSON.stringify(objA));
console.log("Obj B: " + JSON.stringify(objB));