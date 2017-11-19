var s = 'Podstawą szczęścia jest wolność, a podstawą wolności odwaga.';

var text = `Operuję na zdaniu: "Podstawą szczęścia jest wolność, a podstawą wolności odwaga."
Trzynastym znakiem w tym zdaniu jest: ${s.charAt(13)}
Znaki pomiędzy 7. a 12. pozycją to: ${s.substring(7, 12)}
Pierwszy raz znak 'ą' pojawia się na miejscu: ${s.indexOf('ą')}
Ten ciąg ma ${s.length} znaków
Po zamianie 'podstawą' na 'fundamentem' mamy: ${s.replace('podstawą', 'fundamentem')}
Część zdania przed przecinkiem to: ${s.split(',')[0]}
Druga część zdania po odwróceniu to: ${s.split(',')[1].split('').reverse().join('')}`

console.log(text);
