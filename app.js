let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento,texto){
    let elementoHTMl = document.querySelector(elemento);
    elementoHTMl.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);

    if(numeroUsuario === numeroSecreto ){
        asignarTextoElemento("p",`Felicidades acertaste en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        // El usuario no acerto
        if(numeroUsuario>numeroSecreto){
            asignarTextoElemento("p","El numero secreto es menor.");
        }else{
            asignarTextoElemento("p","El numero secreto es mayor.");
        }
        intentos++;
        limpiarCaja();  
    }
    return;
}

function limpiarCaja (){
    document.querySelector("#valorUsuario").value = "";
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //volver a 0 los intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","true");
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //SI el nmero generado esta incluido en la lista hacemos lo siguiente:
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p","Ya no hay mas numeros posibles para sortear.");
    }else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto(); //recursividad
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
        }
    }

function condicionesIniciales(){
    asignarTextoElemento("h1","Juego del numero secreto!");
    asignarTextoElemento("p",`Indicar un numero del 1 al ${numeroMaximo}:`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

condicionesIniciales();
