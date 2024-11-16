//link al video: https://youtu.be/J6SKX2MfLQU
//DATOS DE LOS ALUMNOS:
//NOMBRES: Uma Lara Feoli (119020/6) y Alan Carabajal (118986/1)
//COMISION: Comision 3

let juego;
let estado = 0;
let pantallas = [];
let botonIniciar;
let botonCreditos;
let botonVolver;
let sonidoMusica;

function preload () {
  for (let i = 0; i < 5; i++) {
    pantallas [i] = loadImage ("data/pantalla_" +nf(i+1,2) + ".png")
  }
}

function setup() {
  createCanvas(640, 480);
  juego = new Juego();
  
  sonidoMusica = document.getElementById("sonido-musica");
  
  //BOTONES
  botonIniciar = new Boton("INICIAR", width / 2 - 200, height * 0.75 + 60, 200, 40, () => {
    estado = 1;
    //reproduce el sonido cuando se haga clic en este boton
    if (sonidoMusica) {
      sonidoMusica.currentTime = 0;
      sonidoMusica.play();
    }
  });
  botonCreditos = new Boton("CREDITOS", width / 2 + 200, height * 0.75 + 60, 200, 40, () => estado = 2);
  botonVolver = new Boton("VOLVER", width / 2, height * 0.75 + 60, 200, 40, () => {
    estado = 0;
    juego.reiniciar();
  });
}

function draw() {
  background(200);
  
  //INICIO E INSTRUCCIONES
  if (estado === 0) {
    push();
    image (pantallas [estado], 0, 0, width, height);
    
    fill(0);
    textAlign(CENTER);
    textSize(24);
    text("FRANKENWEENIE", 0, 30, width, height * 0.4);
    text ("instrucciones: toca a 10 enemigos para ganar, pero ten cuidado de no tocar a Sparky, porque sino te restara puntos. Si llegas a -5 puntos perderas la partida", 0, 70, width, height * 0.4);
    
    //BOTONES
    botonIniciar.dibujar();
    botonCreditos.dibujar();
    pop();
  }
  
  //JUEGO
  if (estado === 1) {
    push();
    image (pantallas [estado], 0, 0, width, height);
    juego.actualizar();
    pop();
  }
  
  //CREDITOS
  if (estado === 2) {
    push();
    image (pantallas [estado], 0, 0, width, height);
    
    fill(0);
    textAlign(CENTER);
    textSize(24);
    text("Pelicula dirigida por Tim Burton y producida por Walt Disney Pictures. Trabajo hecho por Alan Carabajal (118986/1) y Uma Lara Feoli (119020/6)", 0, 160 , width, height * 0.4);
    
    //BOTON
    botonVolver.dibujar();
    pop();
  }
  
  //GANASTE
  if (estado === 3) {
    push();
    image (pantallas [estado], 0, 0, width, height);
    
    fill(0, 255, 0);
    textAlign(CENTER);
    textSize(24);
    text("¡Ganaste!", 0, 30, width, height * 0.4);
    
    //BOTON
    botonVolver.dibujar();
    pop();
  }
  
  //PERDISTE
  if (estado === 4) {
     push();
    image (pantallas [estado], 0, 0, width, height);
    
    fill(255, 0, 0);
    textAlign(CENTER);
    textSize(24);
    text("¡Perdiste!", 0, 30, width, height * 0.4);
    
    //BOTON
    botonVolver.dibujar();
    pop();
  }
}

function mousePressed() {
  juego.evaluaColision();
  
  if (estado === 0) {
    botonIniciar.clic();
    botonCreditos.clic();
  } else if (estado === 2 || estado === 3 || estado === 4) {
    botonVolver.clic();
  }
}
