class Pokemon {
  constructor(name, type, atk, def, hp, evolves, Alive) {
    this.name = name;
    this.type = type;
    this.atk = atk;
    this.def= def;
    this.hp = hp;
    this.evolves = evolves;
    this.img=img;
    this.Alive =Alive;
  }
};

attack(){ //donde me falta una llave?????????

    const damage = this.atk - this.def; //mi pokemon se está atacando a si mismo... necesito poder adjudicarle esta def a un enemigo... 
                                        //podre hacer una herencia en "Pokemon.js" y de ahi asignar una def y atk acá??
    if(this.atk > this.def){
        this.hp = 0;
        this.Alive = false; //si el ataque es mayor que la defensa, el pokemon se destruye in inflingir daño
    } else if(this.atk < this.def){
        this.hp -= (this.def-this.atk); //si el ataque es menor que la defensa, se resta de los hp la diferencia entre ambos
        this.Alive = true;
    } else {
        alert("No hubo efecto sobre el rival!")
    }}
;
