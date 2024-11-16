//link al video: https://youtu.be/2TX2m1ws0-Q
//DATOS DE LOS ALUMNOS:
//NOMBRES: Uma Lara Feoli (119020/6) y Alan Carabajal (118986/1)
//COMISION: Comision 3

//VARIABLES
let estado = 0;
let imagenes = [];
let botonA = "NO";
let botonB = "SI";
let textos = [];
let textosEnCrudo = [];
let sonidoMusica;

//cargo los archivos
function preload () {
  textosEnCrudo = loadStrings("data/textos.txt");
  
  for (let i = 0; i < 15; i++) {
    imagenes [i] = loadImage ("data/imagen_" +nf(i+1,2) + ".png")
  }
}

function setup() {
  createCanvas (640, 480);
  
  console.log(textosEnCrudo);
  for ( let i=0; i<textosEnCrudo.length; i++ ) {
    let linea = textosEnCrudo[i];
    let lineaArray = split(linea, "#" );
    textos[lineaArray[0]] = lineaArray[1];
  }

  console.log(textos);
  
  sonidoMusica = document.getElementById("sonido-musica"); 
}

function draw() {
  background (255);
 
  console.log (estado);
 
 //ordeno las pantallas
  if (estado === 0) {
   pantallaInicio(); 
  }else if (estado === 14) {
    pantallaCreditos();
  }else if (estado === 1 || estado === 3 || estado === 7 || estado === 11) {
    pantallaDosBotones();
  }else if (estado === 5 || estado === 6 || estado === 7 || estado === 8 ||  estado === 10 || estado === 2 || estado === 4 || estado === 9 || estado === 12 || estado === 13) {
    pantallaUnBoton();
  }
}

function mousePressed() {
  //comienza la musica
  if (colisionBoton(width/2, height*0.75, 200, 40) ) {
    sonidoMusica.currentTime=0;
    sonidoMusica.play();
  }
  
  //cambio de estados/pantallas
  if (estado === 0) {
    if (colisionBoton(width/2, height*0.75, 200, 40)) { //PANTALLA 1
      estado= 1;
    } else if (colisionBoton(width/2, height*0.75+60, 200, 40)) { //INICIO A CREDITOS
      estado= 14;
    }
  } else if (estado === 14) {
    if ( colisionBoton(width/2, height*0.75+60, 200, 40) ) { //CREDITOS A INICIO
      estado=0;
    }
  } else if (estado === 1) {
    if ( colisionBoton(width/2-200, height*0.75+60, 200, 40) ) { //A
      estado=2;
    } else if ( colisionBoton(width/2+200, height*0.75+60, 200, 40) ) { //B
      estado=3;
    }
  }  else if (estado === 3) {
    if ( colisionBoton(width/2-200, height*0.75+60, 200, 40) ) { //A
      estado=4;
    } else if ( colisionBoton(width/2+200, height*0.75+60, 200, 40) ) { //B
      estado=5;
    }
  } else if (estado === 5) {
    if (colisionBoton(width/2-200, height*0.75+60, 200, 40) ) { //CONTINUAR
      estado=6;
    }
  } else if (estado === 6) {
    if (colisionBoton(width/2-200, height*0.75+60, 200, 40) ) { //CONTINUAR
      estado=7;
    }
  } else if (estado === 7) {
    if (colisionBoton(width/2-200, height*0.75+60, 200, 40) ) { //A
      estado = 8;
    } else if (colisionBoton(width/2+200, height*0.75+60, 200, 40) ) { //B
      estado = 10;
    }
  } else if (estado === 8) {
    if (colisionBoton(width/2-200, height*0.75+60, 200, 40) ) { //CONTINUAR
      estado = 9;
    }
  } else if (estado === 10) {
    if (colisionBoton(width/2-200, height*0.75+60, 200, 40) ) { //CONTINUAR
      estado = 11;
    }
  } else if (estado === 11) {
    if (colisionBoton(width/2-200, height*0.75+60, 200, 40) ) { //A
      estado = 13;
    } else if (colisionBoton(width/2+200, height*0.75+60, 200, 40) ) { //B
      estado = 12;
    }
  } else if (estado === 2 || estado === 4 || estado === 9 || estado === 12 || estado === 13) {
    if (colisionBoton(width/2-200, height*0.75+60, 200, 40) ) { 
      //INICIO
      estado = 0;
    }
  } 
}
