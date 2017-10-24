class Figura {
	constructor(nazwa){
  this.nazwa = nazwa;
  }
}

class Czworokat extends Figura {
	constructor(nazwa, typ_czworokata, a, b){
  super(nazwa);
  this.typ_czworokata = typ_czworokata;
  this.a = a;
  this.b = b;
  }

}


class Prostokat extends Czworokat {
	constructor(nazwa, typ_czworokata, a, b){
  super(nazwa, typ_czworokata, a, b);
  }

	podajPole(){
  return (this.a)*(this.b);
  }
	podajObwod(){
  return (this.a)*2+(this.b)*2;
  }
}



var prost = new Prostokat('Julia', 'kwadrat', 5, 8);
console.log(prost.nazwa);
console.log(prost.typ_czworokata);
console.log(prost.a);
console.log(prost.b);
console.log(prost.podajPole());
console.log(prost.podajObwod());
