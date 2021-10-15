

$( document ).ready(function() {
    // function slider
    $('.slider').slick({
        infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
    //   autoplay: true,
      autoplaySpeed: 2000
    });
});
new WOW().init();


//event
const bars = document.querySelector('.sub-menu');
const menu = document.querySelector('.header-menu');
bars.addEventListener('click', () => {
  bars.classList.toggle('active');
  menu.classList.toggle('active');
});


$('.banner-angle').click(function() {
  let offset = $(this).parents().children(".banner").next().offset().top;
  $(window).scrollTop(offset);
  
});
 //save cái, save cái 

