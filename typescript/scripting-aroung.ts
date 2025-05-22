let interMiami: number = 2
let fcDallas: number = 2
let messi: number = 1
let juegaMessi: boolean = true

jugar(interMiami, fcDallas, juegaMessi)

function jugar(equipo1: number, equipo2: number, juegaMessi: boolean):void {

    if(juegaMessi) equipo1+=1;

    if(equipo1 > equipo2) console.log('gana Inter Miami')
    if(equipo1 == equipo2) console.log('empatan')
    if(equipo1 < equipo2) console.log('gana fc Dallas')

}


 ////////////////////////////////////////////////////
let estudiasteJs: boolean = false

if ( estudiasteJs ){
    console.log('continua viendo el video') 
}else{
    console.log('primero necesitas ver el curso ')
}