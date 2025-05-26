type Programador = {
    nombre: string,
    tecnologias?: string [] | null,
    graduated: boolean
}

let new_programador: Programador = {
    nombre: 'George',
    tecnologias: ['java', 'golang', 'python'],
    graduated: true  
} 


let progamador3: Programador = {
    nombre: 'luis',
    tecnologias: null,
    graduated: true
}