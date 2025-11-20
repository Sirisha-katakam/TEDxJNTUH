// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function(){
  var btn = document.querySelector('.mobile-menu');
  if(!btn) return;
  btn.addEventListener('click', function(){
    document.body.classList.toggle('menu-open');
  });
  // close menu when clicking a link
  document.querySelectorAll('.nav-links a').forEach(function(a){
    a.addEventListener('click', function(){ document.body.classList.remove('menu-open'); });
  });
});
// Init AOS for animations
if(window.AOS) AOS.init({duration:700, once:true, easing:'ease-out-cubic'});
