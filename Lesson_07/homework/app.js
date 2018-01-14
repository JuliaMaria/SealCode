function main() {
	if (Modernizr.geolocation) {
		navigator.geolocation.getCurrentPosition(success, fail);
	}
}

function success(location) {
	let vector = [];
	document.getElementsByTagName('div')[0].id = 'mapid';
	vector[0] = location.coords.latitude;
	vector[1] = location.coords.longitude;
	tableOfLocations.push(vector);
	mymap = L.map('mapid').setView(vector, 13);
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		id: 'mapbox.streets'
	}).addTo(mymap);
	draw(vector, 0);
	getPointsData();
	L.control.scale({imperial: false}).addTo(mymap);
}

function getPointsData() {
let xhr = new XMLHttpRequest();
xhr.onload = function() {
  if(xhr.status === 200) {
    responseObject = JSON.parse(xhr.responseText);
      for (let i = 0; i < responseObject.features.length; i++) {
      let vector = [];
			let name = responseObject.features[i].properties.long_name;
      vector[0] = responseObject.features[i].geometry.coordinates[1];
      vector[1] = responseObject.features[i].geometry.coordinates[0];
			tableOfLocations.push(vector);
			names.push(name);
    }
		for (let i = 0; i < tableOfLocations.length; i++) {
			draw(tableOfLocations[i], i);
		}
  }
}
xhr.open('GET', 'points.json', true);
xhr.overrideMimeType("application/json");
xhr.send(null);
}

function fail(location) {
	console.log(msg.code);
}

let redIcon = new L.Icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

function draw(vector, number) {
	if (number == 0) {
		let marker = L.marker(vector, {icon: redIcon}).addTo(mymap);
			marker.bindPopup("Tu jesteś").openPopup();
	}
	else {
		let marker = L.marker(vector).addTo(mymap);
		marker.on('click', function () {
			marker.bindPopup(names[number-1]).openPopup();
		})
	}

	let circle = L.circle(vector, {
    color: 'blue',
    fillColor: '#0000AA',
    fillOpacity: 0.5,
    radius: 30
}).addTo(mymap);

}

let tableOfLocations = [];
let names = [];
let mymap;

window.onload = main;
