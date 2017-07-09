jQuery.noConflict();
(function( $ ) {

 // -------------------------------------------------------------
    // Sticky Menu
    // -------------------------------------------------------------

    (function() {
        var nav = $('.navbar');
        var scrolled = false;

        $(window).scroll(function() {

            if (110 < $(window).scrollTop() && !scrolled) {
                nav.addClass('sticky animated fadeInDown').animate({
                    'margin-top': '0px'
                });

                scrolled = true;
            }

            if (110 > $(window).scrollTop() && scrolled) {
                nav.removeClass('sticky animated fadeInDown').css('margin-top', '0px');

                scrolled = false;
            }
        });

    }());

     
$('#menu').multilevelpushmenu({
    mode: 'cover',
    preventItemClick: true,
    direction: 'rtl', 
    fullCollapse: false,
    backText: 'الرجوع',
    menuWidth: '100%',
    menuHeight: '100%',
    backItemClass: 'mb-back-btn',
    backItemIcon: 'fa fa-angle-right',
    groupIcon: '',
    swipe: 'desktop'   
});







})(jQuery);
