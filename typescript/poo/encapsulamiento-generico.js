"use strict";
class Sorteo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    setNumero(ticket) {
        this.ticket = ticket;
    }
    getNumero() {
        return this.ticket;
    }
    sortear() {
        return `Para ${this.nombre} el ticket es ${this.ticket}`;
    }
}
let sorteo = new Sorteo('Loteria Nacional');
sorteo.setNumero('n3');
console.log(sorteo.sortear());
