class Boton {
  constructor(txt, x, y, w, h, accion) {
    this.txt = txt;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.accion = accion;
  }

  dibujar() {
    push();
    rectMode(CENTER);
    if (this.colision()) {
      fill(20, 200, 0); 
    } else {
      fill(100);
    }
    rect(this.x, this.y, this.w, this.h);
    textAlign(CENTER, CENTER);
    fill(255);
    text(this.txt, this.x, this.y);
    pop();
  }

  colision() {
    return (mouseX > this.x - this.w / 2 &&
            mouseX < this.x + this.w / 2 &&
            mouseY > this.y - this.h / 2 &&
            mouseY < this.y + this.h / 2);
  }

  clic() {
    if (this.colision()) {
      this.accion();
    }
  }
}
