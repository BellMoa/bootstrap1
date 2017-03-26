$(function () {
    $('.carousel').carousel({
        interval: false
    });


   $('.search').on('click',function (){
       $('.main-menu .navbar-form').slideToggle();
   });
   });

$(window).load(function () {
   var carouselcaptionwidth = $('carousel-sidebar.active img').width();
    $('#carousel-sidebar img').each(function () {
        $(this).attr('width',carouselcaptionwidth);
    });
    $('#carousel-sidebar .sidebar-carousel-caption').css('max-width',carouselcaptionwidth + 'px');
    $('#carousel-sidebar .carousel-indicators').css('max-width',carouselcaptionwidth + 'px');
});
//TODO сделать скрипт рабочим как только выучу jquerry