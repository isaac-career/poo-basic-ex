class Pelicula {
    nombre?: string = 'Goal 3'
    protagonistas?: string[]
    actores?: string[]


    proyectarEnCine(){
        console.log(` ${this.nombre}  esta siendo proyectada`)
    } 

}

const pelicula = new Pelicula()

pelicula.proyectarEnCine()
