
// menu
function replaceAll(str, de, para){
    var pos = str.indexOf(de);
    while (pos > -1){
        str = str.replace(de, para);
        pos = str.indexOf(de);
    }
    return (str);
}

$(function() {
    var s = replaceAll($(location).attr('pathname'), "/", "");

    $('.navbar a').each(function(){
        var test = $(this).attr('href');
        test = replaceAll(test, "/", "");

        if (test == s){
            $(this).addClass('current');
            $(this).parent().addClass('current');
        } else {
            $(this).removeClass('current');
        }
    });
}); 
 

  // banner  meu-primeiro-livro-owl-carousel  
jQuery(document).ready(function() {
    jQuery(".owl-carousel").owlCarousel({ 
        animateOut: 'fadeOut',
        items:1, 
        nav : true,  
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true 
    });
  }); 
    