var date = document.getElementById("date");
date.innerHTML = new Date().toLocaleDateString();

var button = document.getElementById('submitbutton');
button.addEventListener('click', addTask, false);

$('input[type=text]').on('keydown', function(e) {
    if (e.which == 13) {
        e.preventDefault();
        addTask();
    }
});

var delButtons = document.querySelectorAll(".delbutton");
for (var i=0; i<delButtons.length; i++) {
  delButtons[i].addEventListener('click', deleteTask, false);
}


function addTask() {
  var newValue = document.getElementById("newtask").value;
  var newTaskText = document.createTextNode(newValue);
  var newTask = document.createElement('p');
  newTask.appendChild(newTaskText);
  var check = document.createElement('input');
  check.setAttribute('type','checkbox');
  var text = document.createTextNode('Task done');
  check.appendChild(text);
  var deleteButton = document.createElement('button');
  deleteButton.setAttribute('type','button');
  deleteButton.setAttribute('class', 'delbutton');
  var deleteText = document.createTextNode('Delete');
  deleteButton.appendChild(deleteText);
  deleteButton.addEventListener('click', deleteTask, false);
  newTask.appendChild(check);
  newTask.appendChild(deleteButton);
  var tasks = document.getElementById("tasklist");
  tasks.appendChild(newTask);
}

function deleteTask() {
  var deleteElement = this.parentNode;
  deleteElement.parentNode.removeChild(deleteElement);
}
