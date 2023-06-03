class Player{
constructor(n){
  this._name = n;
}

  set name(n){
    this._name = n;

  }
  set level(l){
    this._level = 1;
  }

  set type(t){
    this._type = t;
  }

  set weapon(w){
    this._weapon = w;
  }

  set health(h){
    this._health = h;
  }

  get name(){
    return this._name;
  }

  get level(){
    return this._level;
  }

  get type(){
    return this._type;
  }

  get weapon(){
    return this._weapon
  }

  get health(){
    return this._health
  }

  // namer(){
  //   return this._name
  // }

  reset(){
    this._level = "5";
    this._type  = "Peasant";
    this._weapon = "Saber";
    this._health = 5
  }

  getAllInfo(){
    if(parseInt(this._health) === 0){
      this._health = this.name + " Died!"
      return this._health;
    } else {
      return (
        "Name: " + 
        this.name + 
        "\n" + 
        "Type: " +
        this.type + 
        "\n" + 
        "Weapon: " +
        this.weapon +
        "\n" + 
        "Health: " +
        this.health +
        "\n"

      )
    }
  }
}

let p1 = new Player('Atrus');

console.log(p1.name)
console.log(p1.reset())
console.log(p1.getAllInfo())

console.log('hey heather')