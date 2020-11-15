 


   
(function($) {
  $(document).ready(function(){
    $('.carousel-livros').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 2,
      responsive: [ 
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });  
   
  });
 }) (jQuery);
 
 