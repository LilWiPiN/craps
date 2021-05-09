var tiro1, tiro2, dado1, dado2, punto, total;
var posiciones = [0,-160,-320,-481,-642,-803];
var botonTirar;
var turno = 1;

window.onload = init; //Cuando la ventana cargue, llama a la funcion init

function init(){
	botonTirar = document.getElementById("boton_Tirar");
	botonTirar.addEventListener("click", jugar); //cuando se haga clic llama a jugar

	dado1 = document.getElementById("dado1");
	dado2 = document.getElementById("dado2");
  	cerrar.addEventListener("click",cerrarVentana);
}

function tirarDado(){ //retorna numero entre 1 y 6
	return Math.floor(Math.random() * 6) + 1 ;
}
//math.random genera un float entre 0 y 1, ese float se multiplica por 6, Math.floor redondea el numero 2.783443 = 2 y al sumarle 1 hace que sea un numero entre 1 y 6.

function cambiarCara(ref,cara){
	ref.style.backgroundPosition = posiciones[cara-1]+"px";
}

function jugar(){
	tiro1 = tirarDado();//Retorna un numero entre 1 y 6
  	tiro2 = tirarDado();
  	cambiarCara(dado1,tiro1);
  	cambiarCara(dado2,tiro2);

  	total = tiro1 + tiro2;

	if((total == 7 || total == 11) && turno == 1 ){
  		mostrarMensaje("🎉🥳Ganaste🥳🎉");
  	}
  	else if((total==2 || total==3 || total==12) && turno==1){
  		mostrarMensaje("😢😭Perdiste😭😢");
  	}
  	else{
  		if(turno == 1){
  			punto = total;
        	console.log("Punto es ",punto);
        	alert("Tiene que volver a sacar un " + punto + " para ganar, si saca un 7 primero, perderá.");
		}

    	if(total == punto && turno > 1){
			mostrarMensaje("🎉🥳Ganaste🥳🎉");
        	turno = 1;
        	punto = 0;
		}
    	else{
			if(total == 7){
				mostrarMensaje("😢😭Perdiste😭😢");
          		turno = 1;
          		punto = 0;
        	}
        	else{
				turno++;
			}
		}
 	}
}

function mostrarMensaje(mensaje){
  mensajeTexto.innerHTML = mensaje;
  abrirVentana();
}

function abrirVentana(){  
  ventana.className = "ventanaAlerta__animated animate__fadeIn";
}

function cerrarVentana(){
  ventana.className = "ventaAlerta hidden";
}