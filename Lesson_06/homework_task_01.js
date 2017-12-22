var elMap = document.getElementById('loc');
var message = 'Sorry, we could not get your location :-(';

function getGeolocation() {

if (Modernizr.geolocation) {
  navigator.geolocation.getCurrentPosition(success, fail);
  elMap.textContent = 'Checking location...';
} else {
  elMap.textContent = message;
}

}

function success(location) {
  msg = '<h3>Longitude:<br>';
  msg += location.coords.longitude + '</h3>';
  msg += '<h3>Latitude:<br>';
  msg += location.coords.latitude + '</h3>';
  var offset = new Date().getTimezoneOffset();
  offset = 'UTC ' + ((offset < 0 ? '+':'-') +
            pad(parseInt(Math.abs(offset/60)), 2) + ':' +
            pad(Math.abs(offset%60), 2));
  msg += '<h3>Time zone:<br>' + offset + '</h3>';
  localStorage.setItem('timeZone', offset);
  msg += '<h3>Time at UTC 00:00:<br>';
  var date = new Date();
  date.setHours(date.getHours() + date.getTimezoneOffset()/60);
  msg += date.getHours() + ':' + date.getMinutes();
  elMap.innerHTML = msg;
}

function fail(msg) {
  elMap.textContent = message;
  console.log(msg.code);
}

getGeolocation();

function pad(number, length){
    var str = "" + number;
    while (str.length < length) {
        str = '0'+ str;
    }
    return str;
}

document.getElementById('enterData').addEventListener('click', function () {
  sessionStorage.setItem('name', document.getElementsByTagName('input')[0].value);
  sessionStorage.setItem('surname', document.getElementsByTagName('input')[1].value);
  sessionStorage.setItem('gender', document.getElementsByTagName('input')[2].value);
  sessionStorage.setItem('yearOfBirth', document.getElementsByTagName('input')[3].value);
  sessionStorage.setItem('city', document.getElementsByTagName('input')[4].value);

});
