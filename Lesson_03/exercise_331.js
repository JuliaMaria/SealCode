var funkcja = function(element) {
	console.log(element);
	console.log(element.parent());
  console.log(element.closest('section'));
  console.log(element.next());
  console.log(element.prev());
  console.log(element.children());
}

var a = $('section.popular-recipes');
var b = $('nav');
var c = $('aside');
var d = $('form');

console.log(funkcja(a));
console.log(funkcja(b));
console.log(funkcja(c));
console.log(funkcja(d));
