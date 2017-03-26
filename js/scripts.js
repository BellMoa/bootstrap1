$(function () {
    $('.carousel').carousel({
        interval: false
    });


   $('.search').on('click',function (){
       $('.main-menu .navbar-form').slideToggle();
   });
   });

$(window).load(function () {
   var carouselcaptionwidth = $('carousel-sidebar.active img').width()
    $('#carousel-sidebar img').each(function () {
        $(this).attr('width',carouselcaptionwidth);
    })
});