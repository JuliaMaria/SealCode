class Osoba {
	constructor(imie, nazwisko, rokUrodzenia, plec) {
  this.imie = imie;
  this.nazwisko = nazwisko;
  this.rokUrodzenia = rokUrodzenia;
  this.plec = plec;
  }
  podajWiek() {
  var current = new Date().getFullYear();
  return current-this.rokUrodzenia;
  }
}


class Nauczyciel extends Osoba {
  constructor(imie, nazwisko, rokUrodzenia, plec, nauczanyPrzedmiot, rokRozpoczeciaPracy) {
  super(imie, nazwisko, rokUrodzenia, plec);
  this.nauczanyPrzedmiot = nauczanyPrzedmiot;
  this.rokRozpoczeciaPracy = rokRozpoczeciaPracy;
  }
  podajIloscLatPracy() {
    var current = new Date().getFullYear();
  	return current-this.rokRozpoczeciaPracy;
  }
}


class Wychowawca extends Nauczyciel {
	constructor(imie, nazwisko, rokUrodzenia, plec, nauczanyPrzedmiot, rokRozpoczeciaPracy, przydzielonaKlasa) {
  super(imie, nazwisko, rokUrodzenia, plec, nauczanyPrzedmiot, rokRozpoczeciaPracy);
  this.przydzielonaKlasa = przydzielonaKlasa;
  }
}



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
