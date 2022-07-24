//DECLARAMOS UNA FUNCION ALEATORIA PARA PC
const valorAleatorio = (max, min) =>{
    return Math.floor(Math.random() * (max - min + 1) + min)
}


//DECLARAMOS LA FUNCION ELECCION DEL jugador
const eleccion = (jugador) =>{
    let resultado = ""
    if(jugador == "1"){
        resultado = "PIEDRA"
    }else if(jugador == "2"){
        resultado = "PAPEL"
    }else if(jugador == "3"){
        resultado = "TIJERA"
    }else{
        resultado = "MAL ELEGIDO"
    }
    return resultado
}

let jugador = 0
let pc = 0  

let triunfos = 0
let perdidas = 0

while (triunfos < 3 && perdidas < 3){
    pc = valorAleatorio(1,3)
    jugador = prompt("1. Elegiste piedra,2. Elegiste papel, 3. Elejiste tijera")

    alert("TU ELIGES:" + eleccion(jugador))
    alert("PC ELIGE:" + eleccion(pc))
    
    //BATALLA
    if(pc == jugador){
        alert("EMPATE")
    }else if(jugador == 1 && pc == 3){
        alert("GANASTE")
        triunfos += 1 
    }else if(jugador == 2 && pc == 1){
        alert("GANASTE")
        triunfos += 1 
    }else if(jugador == 3 && pc == 2){
        alert("GANASTE")
        triunfos += 1 
    }else{
        alert("PERDISTE")
        perdidas += 1
    }
    
}

alert (`Ganaste: ${triunfos} y perdiste ${perdidas}`)



