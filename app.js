/*function contar () {
    resultado=2+3;
    console.log("La suma de dos más tres es: " +resultado);
}

contar(); */
//sin parametros, con parametros seria (a+b) y al final al llamarla se pondria contar(2,3)
//

/*var x = function (a,b) {
    return a*b
};

//var z = x(4,3);

console.log(x(2,3)); */
// x de ser variable pasa a ser funcion

//funcion de elevacion, se llama a la funcion desde el principio, el return ahorra toda la operacion de la variables. Elevacion o hoisting el espacio entre el console y la funcion

/*console.log(rest (5,2));

function rest (a,b){
    return a - b;
}; */

//invocar a la funcion, funcion autoinvocada, la misma funcion se autoinvoca y es con parentesis
/*
(function saludito () {
    console.log("Holi Caracoli Crayoli");
})();
*/

// mi funcion valor va a hacer la multi, y la funcion la toma como expresion
/*
function valor(a,b){
    return a * b;
}
//aqui la funcion la toma como expresion
var x = valor (2,3)*3;

console.log(x); */

//funciones flecha a 'y' se le agrega la funcion flecha, solo puede hacer una operacion y simple
function multi(a,b){
    resultado=a*b;
    console.log(resultado);
}
multi(2,3);

var x = function(x,y){
    return x*y;
}
console.log(x(2,3));

const y = (x,y) => x*y;
console.log(y(2,3));
