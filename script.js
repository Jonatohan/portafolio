$(document).ready(function () {
  $(".drone-button").addClass("animated bounce");
  $(".travel-button").addClass("animated bounce");
  $(".next-button").addClass("animated bounce");
  $(".project-1").addClass("animated fadeIn");
  $(".project-2").addClass("animated fadeIn");
  $(".project-3").addClass("animated fadeIn");
  $(".nombre").addClass("animated bounce");
  
});
setInterval(function() {
  $(".next-button").toggleClass("animated shake");
}, 2000);

 
 document.getElementById('project-1').addEventListener('click', function() {

     window.location.href = "https://codigo-buho.vercel.app/";
 });

 document.getElementById('project-3').addEventListener('click', function() {

  window.location.href = "https://image-gallery-ten-tau.vercel.app/";
});