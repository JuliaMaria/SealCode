function main() {
    const x = "Hello world!";
	if (typeof x == 'string') {
		throw new Error(200, 'x jest typu string!');
	}
    try {
		const result = run(x);
	} catch(e) {
		console.log(e.name); 
		console.log(e.message); 
	}
    console.log(x.lowerCase());
}

window.onerror = function (msg, url, line) {
   console.warn(msg);
   console.warn(url);
   console.warn(line);
}
window.onload = main;

