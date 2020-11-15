
$('.carousel-nossos-autores').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
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