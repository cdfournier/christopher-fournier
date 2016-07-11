// Animated Modal
$("#open-nav").animatedModal({
    modalTarget:'nav-modal',
    animatedIn:'zoomInDown',
    animatedOut:'bounceOut',
    color:'#fff'
});

// smooth scroll
smoothScroll.init({
  speed: 1000,
	easing: 'easeInCubic'
});

// Counter Up
jQuery(document).ready(function( $ ) {
  $('.counter').counterUp({
      delay: 10,
      time: 1000
  });
});
