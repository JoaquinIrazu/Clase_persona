class Gato {
  name;
  color;
  energy;
  state;
  enumState = {
    HAPPY: "Feliz",
    NORMAL: "Normal",
    TIRED: "Cansado",
    EXHAUSTED: "Exhausto"
  }

  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.energy = 100;
    this.state = this.enumState.HAPPY;
  }

  limit() {
    if (this.energy > 100) {
      this.energy === 0
      return "Ya tenes suficientes puntos de energia"
    } else if (this.energy < 0) {
      this.energy === 0
      return "No se puede consumir mas energia"
    }
  }

  mood() { //private - este metodo se usa solo dentro de la clase
    if (this.energy > 80) {
      this.state = this.enumState.HAPPY;
    } else if (this.energy > 40) {
      this.state = this.enumState.NORMAL;
    } else if (this.energy > 20) {
      this.state = this.enumState.TIRED;
    } else {
      this.state = this.enumState.EXHAUSTED;
    }
  }

  eat() {
    this.energy = this.energy + 50;
    //this.limit();
    this.mood();
  }

  hunt() {
    //this.limit();
    this.energy = this.energy - 50;
    this.mood();
  }

  play() {
    //this.limit();
    this.energy = this.energy - 30;
    this.mood();
  }

  showData() {
    return `Tu gato se llama ${this.name} y es de color ${this.color}. Estado: ${this.state}`;
  }
}

