var xhr = new XMLHttpRequest();               

xhr.onload = function() {                      
  if(xhr.status === 200) {                      
    responseObject = JSON.parse(xhr.responseText);
    }
 }

xhr.open('GET', 'Songs.json', true); 
xhr.overrideMimeType("application/json");      
xhr.send(null); 
 
 
var oldButton = null;

var getElement = function(e) {
	  if (oldButton) {
		  oldButton.disabled = false;
	  }
	  e.target.disabled = true;
	  oldButton = e.target;
      let newContent = '';
      let id = e.target.id;
      newContent += '<div class="song">';
      newContent += '<p>' + responseObject.piosenki[id].tytul + '</p>';
      newContent += '<p>' + responseObject.piosenki[id].wykonawca + '</p>';
      newContent += '<p>' + responseObject.piosenki[id].gatunek + '</p>';
      newContent += '<p>' + responseObject.piosenki[id].album + '</p>';
      newContent += '<p>' + responseObject.piosenki[id].rokwydania + '</p>';
      newContent += '</div>';

      document.getElementById('content').innerHTML = newContent;
}

