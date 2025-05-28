// a method can receive an element of expected-type-object or another literal object if include
// expected variables  to use i.e. (function)


interface Developer {
    nombre: string,
    tecnologias: string [] | null,
    graduated?: boolean 
}

let dev: Developer = {
    nombre: 'George',
    tecnologias: ['java', 'golang', 'python'],
    graduated: true  
} 


let dev2 =  {
    nombre: 'luis',
    tecnologias: null,
    graduated: true
}

function enviarCV (developer: Developer){
    console.log(`this Resume is of: ${developer.nombre }`) 
}

enviarCV(dev2)