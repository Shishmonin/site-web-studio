// 'use strict'
// ГАМБУРГЕР МЕНЮ
$(document).ready(function(){
  $(".menu").on('click',function(){
    $(this).find(".hambergerIcon").toggleClass("open");
  });
})
// СЛАЙДЕР С ТЕКСТОМ ГЛАВНАЯ
var sheetSlider = (function(){

  var animateDelay = 4000,
      autoplayHoverPause = false,
      auto, slides = document.querySelectorAll(".sh-auto input"),
      sliderContent = document.querySelector(".sh-auto .sh__content"), 
      sliderButtons = document.querySelectorAll(".sh-auto .sh__btns label"),
      sliderArrows = document.querySelectorAll(".sh-auto .sh__arrows label"),
      sliderControl = document.querySelector(".sh-control"), sliderStoped = false;
  
  // Pausar la animacion si el puntero esta sobre el contenido
  if (autoplayHoverPause) {    
    sliderContent.addEventListener("mouseover", pauseSlider);
    sliderContent.addEventListener("mouseout", playSlider);
  }
  
  if(sliderControl) sliderControl.addEventListener("click", playPauseButton);
  
  // Marcar los input[radio]
  function setInput(){
    auto = setInterval(autoSlides, animateDelay);
  }
  
  function autoSlides() {
  for (var i = 0; i < slides.length; i++)
    if (slides[i].checked) {
        if(i === slides.length - 1) slides[0].checked = true;
        else slides[i + 1].checked = true;
        break;
    }
  }
  
  function pauseSlider(){
    clearInterval(auto);
  }
  
  function playSlider(){
    if(!sliderStoped) setInput();
  }
  
  function playPauseButton(){
    sliderStoped = !sliderStoped;
    pauseSlider();
    sliderControl.classList.add('is-active');
    if(!sliderStoped){
      autoSlides();
      playSlider();
      sliderControl.classList.remove('is-active');
    }
  }
  
  for (var i = 0; i < slides.length; i++) {
    if (sliderButtons.length){
        // Pausar si los botones reciben un clic
        sliderButtons[i].addEventListener("click", function() {
            pauseSlider();
            playSlider();
        });
    }
    if (sliderArrows.length){
    // Pausar si las flechas reciben un clic
    sliderArrows[i].addEventListener("click", function() {
        pauseSlider();
        playSlider();
    });
    }
  }
      
  window.addEventListener("load",function(){
    setInput();
  });
                          
  })();
// ПАРАЛАКС
$(document).ready(function () {
  $('.container_paralax').mousemove(function (e) {
    parallax(e, document.getElementById('c1'), 0.7);
    parallax(e, document.getElementById('c2'), 0.9);
    parallax(e, document.getElementById('c3'), 1.4);
  });
});
function parallax(e, target, layer) {
  var strength = 18;
  var layer_coeff = strength / layer;
  var x = ($(window).width() - target.offsetWidth) / 1.8 - (e.pageX - ($(window).width() / 0)) / layer_coeff;
  var y = ($(window).height() - target.offsetHeight) / 96 - (e.pageY - ($(window).height() / 0.35)) / layer_coeff;
  $(target).offset({
    top: y,
    left: x
  });
}
;


  // КАРУСЕЛЬ ПОРТФОЛИО
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:1,
    loop:true,
    merge:true,
    video:true,
    lazyLoad:true,
    center:true,
    // nav:true,
    dots:false,
    animateOut: 'slideOutDown',
    // animateIn: 'flipInX',
  //   responsive : {
  //     0 : {
  //       items:1,
  //     },
  //     700 : {
  //       items:2,
  //     },
  //     1200 : {
  //       items:3,
  //     }
  // }
  });
});