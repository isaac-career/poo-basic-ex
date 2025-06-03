class Pelicula {
    nombre?: string
    protagonistas?: string[]
    actores?: string[]


    proyectarEnCine(){
        console.log(` ${this.nombre}  esta siendo proyectada`)
    } 


    constructor(nombre:string, protagonistas: string[], actores: string[]){
        this.nombre = nombre
        this.protagonistas = protagonistas
        this.actores = actores
    }

}

const pelicula = new Pelicula('sicario', ['Benito','Cochiloco'], ['damian',' jose'])
// const pelicula = new Pelicula()
console.log(pelicula)
// pelicula.proyectarEnCine()
