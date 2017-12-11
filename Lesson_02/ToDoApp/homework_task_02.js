function loadTasks() {
  $.getJSON('http://sealcode.org:8082/api/v1/resources/task')
  .done( function(data){
    $.each(data, function(key, val) {
      var newValue = val.body.title;
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

 $.ajax({
  type: "POST",
  url: 'http://sealcode.org:8082/api/v1/resources/task',
  dataType: 'application/json',
  data: JSON.stringify({
    "title": newValue,
    "is_done": false
  }),
  complete: function() {
  alert('Completed!');
  },
  success: function() {
    alert('Successfully uploaded!');
  },
  fail: function() {
  alert('Failed!');
  }
});

}
else {
  alert('You cannot add an empty task!!!');
}
}
