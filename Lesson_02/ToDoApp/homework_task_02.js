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
}
else {
  alert('You cannot add an empty task!!!');
}
}
