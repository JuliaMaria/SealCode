var xhr = new XMLHttpRequest();               

var response = null;
var songs = null;

xhr.onload = function() {                      
  if(xhr.status === 200) {                      
    response = xhr.responseXML;
	songs = response.getElementsByTagName('piosenka');
    }
 }

xhr.open('GET', 'Songs.xml', true);       
xhr.send(null); 

function getNodeValue(obj, tag) {
	return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
}
 
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
      newContent += '<p>' + getNodeValue(songs[id], 'tytul') + '</p>';
      newContent += '<p>' + getNodeValue(songs[id], 'wykonawca') + '</p>';
      newContent += '<p>' + getNodeValue(songs[id], 'album') + '</p>';
      newContent += '<p>' + getNodeValue(songs[id], 'gatunek') + '</p>';
      newContent += '<p>' + getNodeValue(songs[id], 'rokwydania') + '</p>';
      newContent += '</div>';

      document.getElementById('content').innerHTML = newContent;
}

