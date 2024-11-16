class Juego {
  constructor() {
    this.puntaje = new Puntaje();
    
    this.enemigos = [];
    this.cant = 20;
    for (let i = 0; i < this.cant; i++) {
      this.enemigos[i] = new Enemigos();
    }
  }
  
  
  reiniciar() {
    this.puntaje = new Puntaje(); //reinicia los puntos
    for (let i = 0; i < this.cant; i++) {
      this.enemigos[i].reiniciarUbicacion(); //reinicia la posición de los enemigos
    }
  }
  
  
  actualizar() {
    for (let i=0; i<this.cant; i++) {
      this.enemigos[i].actualizar();
    }
    
    this.puntaje.dibujar();
    
    //perdiste o ganaste
    if (this.puntaje.obtenerPuntaje() >= 10) {
      estado = 3; //pantalla ganaste
    } else if (this.puntaje.obtenerPuntaje() <= -5) {
      estado = 4; //pantalla perdiste
    }
  }
  
  
  evaluaColision() {
    //evalua la colision con el mouse en el juego
    for ( let i=0; i<this.cant; i++) {
      if (this.enemigos[i].evaluaColision(mouseX, mouseY) ) {
        if (this.enemigos[i].tipo === 0 || this.enemigos[i].tipo === 1 || this.enemigos[i].tipo === 2) {
          this.puntaje.aumenta();
        } else if (this.enemigos[i].tipo === 3){
          this.puntaje.decrece();
        }
      }
    }
  }
}
