$('aside h2').append('!');
$('ul:last-child').append('<li id="new-id">Nowy element</li>');
$('footer').remove();
$('h1.header.header1').removeClass('header1');
$('h1.header').addClass('header-new');
$('#new-id').css({
  'color': 'red',
  'font-family': 'Serif',
  'line-height': '15px' 
});
$('ul').css({
	'background-color': 'green'
});
$('aside h2:contains("!")').each(function () {
    $(this).html($(this).html().replace("!", "<span style='color:blue'>!</span>"));
});
