const a = $('h1');
console.log(a);
console.log(a.html());
console.log(a.text());

const b = $('aside h2');
console.log(b);
console.log(b.html());
console.log(b.text());

const c = $('aside section:last-child p');
console.log(c);
console.log(c.html());
console.log(c.text());

const d = $('form fieldset:nth-child(3)');
console.log(d);
console.log(d.html());
console.log(d.text());

const e = $('ul li:nth-last-child(2n)');
console.log(e);
console.log(e.html());
console.log(e.text());

const f = $('input:checked');
console.log(f);
console.log(f.html());
console.log(f.text());
