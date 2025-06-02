"use strict";
class Pelicula {
    constructor() {
        this.nombre = 'Goal 3';
    }
    proyectarEnCine() {
        console.log(` ${this.nombre}  esta siendo proyectada`);
    }
}
const pelicula = new Pelicula();
pelicula.proyectarEnCine();
