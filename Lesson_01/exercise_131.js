function Figura(nazwa){
  this.nazwa = nazwa;
}

function Czworokat(nazwa, typ_czworokata, a, b){
	Figura.call(this, nazwa);
  this.typ_czworokata = typ_czworokata;
  this.a = a;
  this.b = b;
}

Czworokat.prototype = Object.create(Figura.prototype);
Czworokat.prototype.constructor = Czworokat;

function Prostokat(nazwa, typ_czworokata, a, b){
	Czworokat.call(this, nazwa, typ_czworokata, a, b);
}

Prostokat.prototype = Object.create(Czworokat.prototype);
Prostokat.prototype.constructor = Prostokat;

Prostokat.prototype.podajPole = function(){
	return (this.a)*(this.b);
}

Prostokat.prototype.podajObwod = function(){
	return (this.a)*2+(this.b)*2;
}


var prost = new Prostokat('Julia', 'kwadrat', 5, 8);
console.log(prost.nazwa);
console.log(prost.typ_czworokata);
console.log(prost.a);
console.log(prost.b);
console.log(prost.podajPole());
console.log(prost.podajObwod());
