"use strict";
class Pelicula {
    proyectarEnCine() {
        console.log(` ${this.nombre}  esta siendo proyectada`);
    }
    constructor(nombre, protagonistas, actores) {
        this.nombre = nombre;
        this.protagonistas = protagonistas;
        this.actores = actores;
    }
}
const pelicula = new Pelicula('sicario', ['Benito', 'Cochiloco'], ['damian', ' jose']);
// const pelicula = new Pelicula()
console.log(pelicula);
// pelicula.proyectarEnCine()
