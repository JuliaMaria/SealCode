var xhr = new XMLHttpRequest();

xhr.onload = function() {
  if(xhr.status === 200) {
    responseObject = JSON.parse(xhr.responseText);


    let newContent = '';
    for (let i = 0; i < responseObject.movies.length; i++) {
      newContent += '<button type="button" onclick="getMovieInfo(event)" ';
      newContent += 'id="' + i + '">';
      newContent += responseObject.movies[i].title;
      newContent += '</button>';
      $('#buttons').append(newContent);
      newContent = '';
    }


  }
};

xhr.open('GET', 'data.json', true);
xhr.overrideMimeType("application/json");
xhr.send(null);

var oldButton = null;

var getMovieInfo = function (e) {
    if (oldButton) {
    oldButton.disabled = false;
    }
    e.target.disabled = true;
    oldButton = e.target;
    let newContent = '';
    let id = e.target.id;
    newContent += '<div>';
    newContent += '<p>' + responseObject.movies[id].title + '</p>';
    newContent += '<p>' + responseObject.movies[id].genre + '</p>';
    newContent += '<p>' + responseObject.movies[id].director + '</p>';
    newContent += '<p>' + responseObject.movies[id].year + '</p>';
    newContent += '<p>' + responseObject.movies[id].plot + '</p>';
    newContent += '</div>';
    document.getElementById("movie").innerHTML = newContent;


}
