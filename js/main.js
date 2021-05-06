var tiro1, tiro2, dado1, dado2, botonTirar; //Declara la variable
var posiciones = [0, -160, -320, -481, -642, -803];
var suma = tiro1 + tiro2; 
var turno = 0;

window.onload = init; //Cuando la ventana cargue, llama a la funcion init

function init (){
	botonTirar = document.getElementById("boton_Tirar");
	botonTirar.addEventListener("click", jugar); //cuando se haga clic llama a jugar
	dado1 = document.getElementById("dado1");
	dado2 = document.getElementById("dado2");
}

function alertaResultado(){
	alert(tiro1 + " " + tiro2);
}

function tirarDado(){ //retorna numero entre 1 y 6
	return Math.floor(Math.random() * 6) + 1; 
}
//math.random genera un float entre 0 y 1, ese float se multiplica por 6, Math.floor redondea el numero 2.783443 = 2 y al sumarle 1 hace que sea un numero entre 1 y 6.

function cambiarCaras(ref, cara){
	ref.style.backgroundPosition = posiciones[cara - 1] + "px";
}

function jugar(){
	tiro1 = tirarDado();
	tiro2 = tirarDado();
	cambiarCaras(dado1, tiro1);
	cambiarCaras(dado2, tiro2);

	
	if (suma == 7 || suma == 11) {
		alert("🎉🥳Ganaste🥳🎉");
		turno++;
	}
	else if(suma == 2 || suma == 3 || suma == 12){
		alert("😢😭Perdiste😭😢");
		turno++;
	}
	else if(suma == 4 || suma == 5 || suma == 6 || suma == 8 || suma == 9 || suma == 10){
		alert("punto");
	}

	if(turno == 1){
		alert(turno);
	}
} 
