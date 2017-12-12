function loadTasks() {
  $.getJSON('http://sealcode.org:8082/api/v1/resources/task')
  .done( function(data){
    $.each(data, function(key, val) {
      var newValue = val.body.title;
	  var isDone = val.body.is_done;
      var button = $('<button type="button" class="delbutton">Delete</button>');
      button.on('click', function() {
        $(this).parent().remove();
      });
	  if(isDone == true) {
		var taskDone = $('<input type="checkbox"><label>Task done</label><br>');
		taskDone.prop('checked', true);
	  }
	  else {
		var taskDone = $('<input type="checkbox"><label></label><br>');
		taskDone.prop('checked', false);
	  }
      taskDone.on('change', function() {
        if ($(this).is(':checked')) {
          $(this).next('label').text('Task done');
        }
        else {
          $(this).next('label').text('');
        }
      });
      var newTask = $('<p>' + newValue + '</p>');
      newTask.append(taskDone);
      newTask.append(button);
      $('div').append(newTask);
    });
  });
}

loadTasks();

var date = $('#date');
date.text(new Date().toLocaleDateString());

var button = $('#submitbutton');
button.click(addTask);

$('input[type=text]').on('keydown', function(e) {
    if (e.which == 13) {
        e.preventDefault();
        addTask();
    }
});

function addTask() {
 var newValue = $('#newtask').val();
 if (newValue.length != 0) {
 var button = $('<button type="button" class="delbutton">Delete</button>');
 button.on('click', function() {
   $(this).parent().remove();
 });
 var taskDone = $('<input type="checkbox"><label></label><br>');
 taskDone.on('change', function() {
   if ($(this).is(':checked')) {
     $(this).next('label').text('Task done');
   }
   else {
     $(this).next('label').text('');
   }
 });
 var newTask = $('<p>' + newValue + '</p>');
 newTask.append(taskDone);
 newTask.append(button);
 $('div').append(newTask);
 $('#newtask').val('');
  
  function sendTask() {
  $.post('http://sealcode.org:8082/api/v1/resources/task', JSON.stringify({
    "title": newValue,
    "is_done": false
  }), function() {
    alert('Successfully uploaded!');
  });
  }
  
  sendTask();
  


}
else {
  alert('You cannot add an empty task!!!');
}
}
