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

//OJO, para ver con oli... me parece que hay que meter un IF mas en el primer IF tanto para
//el caso de la def...

attack(targetPokemon){ //targetPokemon es un parametro y es usado al llamar a la funcion

    const atkDamage = this.atk - targetPokemon.atk; //el daño es la dif entre 2 pokemones en ataque 
    const defDamage = targetPokemon.def - this.atk; //el daño es la dif entre la def mas alta y un ataque inferior del pokemon atacante
                                 
    if(this.atk > targetPokemon.def){
        targetPokemon.hp = 0;
        this.Alive = false; //si el ataque es mayor que la defensa, el pokemon se destruye in inflingir daño
        console.log(`${this.name} destruyó al rival!`)
    } else if(this.atk < targetPokemon.def){
        this.hp -= defDamage; //si el ataque es menor que la defensa, se resta de los hp la diferencia entre ambos
        this.Alive = true; //corregir
    } else if(this.atk>targetPokemon.atk){
        targetPokemon.hp -= atkDamage;
    } else {
        console.log(`${this.name} no pudo atacar!`)
    }
}

    defend(targetPokemon){
        const atkDamage = this.atk - targetPokemon.atk;  
        const defDamage = targetPokemon.def - this.atk; 
                                 
    if(this.def > targetPokemon.atk){
        targetPokemon.hp -= defDamage;
        this.Alive = false; //corregir
        console.log(`${this.name} se defendió del rival!`)
    } else if(this.def < targetPokemon.atk){
        this.hp -= 0;
        this.Alive = false;
    } else{
        console.log(`${this.name} no pudo atacar!`)
    }}

    heal(amountHealed){
        this.hp += amountHealed;
        console.log(`${this.name} se curó en ${this.name} puntos!`)
    
    }

    
