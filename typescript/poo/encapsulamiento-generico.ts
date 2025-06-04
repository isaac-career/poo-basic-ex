class Sorteo <T> {

    private ticket?: T
    
    constructor( private   nombre: string){
    }

    setNumero(ticket:T){
        this.ticket =ticket
    }

    getNumero(){
        return this.ticket 
    }

    public sortear(): string{
        return `Para ${this.nombre } el ticket es ${this.ticket}`
    }

}

let sorteo = new Sorteo<string>('Loteria Nacional')
sorteo.setNumero('n3')
console.log(sorteo.sortear())