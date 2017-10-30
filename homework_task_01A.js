function Osoba(imie, nazwisko, rokUrodzenia, plec){
  this.imie = imie;
  this.nazwisko = nazwisko;
  this.rokUrodzenia = rokUrodzenia;
  this.plec = plec;
}

Osoba.prototype.podajWiek = function () {
  var current = new Date().getFullYear();
  return current-this.rokUrodzenia;
  }

function Nauczyciel(imie, nazwisko, rokUrodzenia, plec, nauczanyPrzedmiot, rokRozpoczeciaPracy){
	Osoba.call(this, imie, nazwisko, rokUrodzenia, plec);
  this.nauczanyPrzedmiot = nauczanyPrzedmiot;
  this.rokRozpoczeciaPracy = rokRozpoczeciaPracy;
}

Nauczyciel.prototype = Object.create(Osoba.prototype);
Nauczyciel.prototype.constructor = Nauczyciel;
Nauczyciel.prototype.podajIloscLatPracy = function() {
    var current = new Date().getFullYear();
  	return current-this.rokRozpoczeciaPracy;
  }

function Wychowawca(imie, nazwisko, rokUrodzenia, plec, nauczanyPrzedmiot, rokRozpoczeciaPracy, przydzielonaKlasa){
	Nauczyciel.call(this, imie, nazwisko, rokUrodzenia, plec, 		    nauczanyPrzedmiot, rokRozpoczeciaPracy);
  this.przydzielonaKlasa = przydzielonaKlasa;
}

Wychowawca.prototype = Object.create(Nauczyciel.prototype);
Wychowawca.prototype.constructor = Wychowawca;

var wych = new Wychowawca('Jan', 'Kowalski', 1975, 'M', 'Fizyka', 2000, '3B');
console.log(wych.imie);
console.log(wych.nazwisko);
console.log(wych.rokUrodzenia);
console.log(wych.plec);
console.log(wych.nauczanyPrzedmiot);
console.log(wych.rokRozpoczeciaPracy);
console.log(wych.przydzielonaKlasa);
console.log(wych.podajWiek());
console.log(wych.podajIloscLatPracy());
