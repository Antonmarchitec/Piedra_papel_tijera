/*let jugador = 0
let pc = 0  

let triunfos = 0
let perdidas = 0


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
*/



const jugar = (juegas) =>{ 
    let resultado = " "
    if(juegas == "1"){
        resultado = "PIEDRA"
        return resultado
    }else if(juegas == "2"){
        resultado = "PAPEL"
        return resultado
    }else if(juegas == "3"){
        resultado = "TIJERA"
        return resultado
    }else{
        resultado = "SALISTE"
        return resultado
    }
}

const aleatorio = (max,min)=>{
    return Math.floor(Math.random() * (max - min + 1) + min)
}





let ganadas = 0
let perdidas = 0




while(ganadas < 3 && perdidas < 3 ){
    let jugador = prompt("1.- Piedra, 2.- Papel, 3.- Tijera ")
    let computadora = aleatorio(3,1)   // 1    2   3   2

    let humano = jugar(jugador)
    alert (`TU ELEGISTE: ${humano}`)

    let compu = jugar(computadora)
    alert (`LA COMPUTADORA: ${compu}`)

        

    //BATALLA
    if(jugador == computadora){
        alert("EMPATE")
    }else if(jugador == 1 && computadora == 3){
        alert("GANADOR")
        ganadas = ganadas + 1
    }else if(jugador == 2 && computadora == 1){
        alert("GANADOR")
        ganadas = ganadas + 1
    }else if(jugador == 3 && computadora == 2){
        alert("GANADOR")
        ganadas = ganadas + 1
    }else{
        alert("PERDEDOR")
        perdidas = perdidas + 1
    }
} 

alert(`GANASTE ${ganadas} , PERDISTE ${perdidas}`)
alert("FIN DEL JUEGO")