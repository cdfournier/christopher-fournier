$('.open--projects').click(function() {
  $('.projects-list').addClass('show');
  $('.open--projects').attr('aria-expanded',true);
  $('aside nav ul').attr('aria-hidden',false);
});
$('.close--projects').click(function() {
  $('.projects-list').removeClass('show');
  $('.open--projects').attr('aria-expanded',false);
  $('aside nav ul').attr('aria-hidden',true);
});