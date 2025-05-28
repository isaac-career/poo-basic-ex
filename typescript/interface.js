"use strict";
// a method can receive an element of expected-type-object or another literal object if include
// expected variables  to use i.e. (function)
let dev = {
    nombre: 'George',
    tecnologias: ['java', 'golang', 'python'],
    graduated: true
};
let dev2 = {
    nombre: 'luis',
    tecnologias: null,
    graduated: true
};
function enviarCV(developer) {
    console.log(`this Resume is of: ${developer.nombre}`);
}
enviarCV(dev2);
