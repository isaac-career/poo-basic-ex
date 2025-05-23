let disney: string | number | boolean 

disney = 'star wars'
console.log(disney)

disney = 15000000
console.log(disney)

disney = true
console.log(disney)
//////////////////////////////////////

let interMiami: number = 3   
let fcDallas: number = 2
let messi: number = 1
let juegaMessi: boolean = true

let palabras:string = "vamo Messi"
jugar(interMiami, fcDallas, juegaMessi)
 
function jugar(equipo1: number, equipo2: number, juegaMessi: boolean):void {
    let motivo:string = ''
    if(juegaMessi) {
        equipo1+=1;

        motivo = 'porque juega messi'
    }

    if(equipo1 > equipo2) console.log(`gana Inter Miami ${motivo}`)
    if(equipo1 == equipo2) console.log('empatan')
    if(equipo1 < equipo2) console.log('gana fc Dallas')

}

palabras.charAt(1)




 ////////////////////////////////////////////////////
let estudiasteJs: boolean = false

if ( estudiasteJs ){
    console.log('continua viendo el video') 
}else{
    console.log('primero necesitas ver el curso ')
}