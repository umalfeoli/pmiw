//link al video: https://youtu.be/AB1Hf2cmL4E
//DATOS DEL ALUMNO:
//NOMBRE: Uma Lara Feoli
//COMISION: Comision 3
//LEGAJO: 119020/6

//VARIABLES
let img;
let cantX = 3;
let cantY = 3; 
let estado;

function preload () {
  img = loadImage ("./data/F_50.jpeg");
}

function setup() {
  createCanvas (800, 400);
  
  estado = 1;
}

function draw() {
  //aplica funciones que no retornan valor
  fondo (125);
  imprimirEstadoMouse(mousePressed);
  
  image (img, 0, 0, 400, 400);
  
  estadosCicloFor();
}

//EVENTO
function mousePressed() {
  estado = estado+1;
  
  if (estado === 5){
    estado = 1;
  }
}
