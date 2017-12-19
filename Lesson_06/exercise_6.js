var elMap = document.getElementById('loc');              
var message = 'Sorry, we could not get your position :-('; 

function getGeolocation() {  
if (Modernizr.geolocation) {                                
  navigator.geolocation.getCurrentPosition(success, fail);  
  elMap.textContent = 'Checking position...';          
} else {                                                
  elMap.textContent = message;                                 
}
}


function success(location) {                             
  msg = '<h3>Longitude:<br>';                
  msg += location.coords.longitude + '</h3>';               
  msg += '<h3>Latitude:<br>';                
  msg += location.coords.latitude + '</h3>'; 
  msg += '<h3>Accuracy:<br>';               
  msg += location.coords.accuracy + '</h3>';
  elMap.innerHTML = msg;  
  addToLocalStorage(location);
  addToSessionStorage(location);
}

function fail(msg) {                                       
  elMap.textContent = message;                               
  console.log(msg.code);                                   
}



function addToLocalStorage(location) {	
	if (Modernizr.localstorage) {
		localStorage.setItem('longitude', location.coords.longitude);
	}
}

function addToSessionStorage(location) {	
	if (Modernizr.sessionstorage) {
		sessionStorage.setItem('latitude', location.coords.latitude);
	}
}

function clearStorage() {
	if (Modernizr.localstorage && Modernizr.sessionstorage) {
		localStorage.clear();
		sessionStorage.clear();
	}
}

document.getElementById('clear').addEventListener('click', clearStorage);
getGeolocation();