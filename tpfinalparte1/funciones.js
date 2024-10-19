//BOTONES
//dibuja los botones
function dibujaBoton(txt, x, y, w, h) {
  push();
  rectMode(CENTER);
  //efecto boton
  if (colisionBoton(x, y, w, h)) {
    fill(20, 200, 0);
  } else {
    fill(100);
  }
  rect(x, y, w, h);
  //texto boton
  textAlign(CENTER, CENTER);
  fill(255);
  text(txt, x, y);
  pop();
}

function colisionBoton(x, y, w, h) {
  return (mouseX>x-w/2 && mouseX<x+w/2 && mouseY>y-h/2 && mouseY<y+h/2);
}


//PANTALLAS
//pantalla de inicio
function pantallaInicio() {
  push();
  image (imagenes[estado], 0, 0, 640, 480);
  fill(255);
  textAlign(CENTER);
  textSize(24);
  text(textos[estado], width/2, height/2);

  //botones
  dibujaBoton("EMPEZAR", width/2, height*0.75, 200, 40);
  dibujaBoton("CRÉDITOS", width/2, height*0.75+60, 200, 40);
  pop();
}

//pantalla de creditos
function pantallaCreditos() {
  push();
  image (imagenes[estado], 0, 0, 640, 480);
  fill(255);
  textAlign(CENTER);
  textSize(24);
  text(textos[estado], 0, 160 , width, height * 0.4);

  //botones
  dibujaBoton("VOLVER", width/2, height*0.75+60, 200, 40);
  pop();
}

//pantallas con un solo boton
function pantallaUnBoton () {
  push();
  image (imagenes[estado], 0, 0, 640, 480);
  fill(20, 200, 0);
  textAlign(CENTER);
  textSize(24);
  text(textos[estado], 0, 30, width, height * 0.4);
  
  //botones
  if (estado === 5 || estado === 6 || estado === 7 || estado === 8 ||  estado === 10) {
    dibujaBoton("CONTINUAR", width/2-200, height*0.75+60, 200, 40);
  } else if (estado === 2 || estado === 4 || estado === 9 || estado === 12 || estado === 13) {
    dibujaBoton("INICIO", width/2-200, height*0.75+60, 200, 40);
  }
  pop();
}

//pantallas con 2 botones
function pantallaDosBotones () {
  push();
  image (imagenes[estado], 0, 0, 640, 480);
  fill(20, 200, 0);
  textAlign(CENTER);
  textSize(24);
  text(textos[estado], 0, 30, width, height * 0.4);

  //BOTONES
  //no
  dibujaBoton(botonA, width/2-200, height*0.75+60, 200, 40);
  //si
  dibujaBoton(botonB, width/2+200, height*0.75+60, 200, 40);
  pop();
}
