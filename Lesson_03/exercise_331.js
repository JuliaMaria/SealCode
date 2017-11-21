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

funkcja(a);
funkcja(b);
funkcja(c);
funkcja(d);
