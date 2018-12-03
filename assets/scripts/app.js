// CHEAPASS PARALLAX
// https://daverupert.com/2018/02/cheapass-parallax/
window.addEventListener('scroll', function() {
  document.body.style.setProperty("--scroll-amount", (document.body.scrollTop || document.documentElement.scrollTop) );
});


// HEADER
var myElement = document.querySelector("header");
var headroom  = new Headroom(myElement);
headroom.init(); 


// AOS
AOS.init({
  duration: 1000
});