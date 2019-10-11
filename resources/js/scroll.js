// jQuery(function () {
//     jQuery(window).scroll(function () {
//         if (jQuery(this).scrollTop() < 650) {
//             $("#home-link").addClass("active");
//             $("#about-link").removeClass("active");
//             $("#projects-link").removeClass("active");
//             $("#contact-link").removeClass("active");
//         } else if (jQuery(this).scrollTop() > 1800) {
//             $("#projects-link").removeClass("active");
//             $("#contact-link").addClass("active")
//         } else if (jQuery(this).scrollTop() > 1200) {
//             $("#about-link").removeClass("active");
//             $("#projects-link").addClass("active");
//         } else if (jQuery(this).scrollTop() > 650) {
//             $("#home-link").removeClass("active");
//             $("#about-link").addClass("active");
//         }
//     });
// });


$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#lateral-menu a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#lateral-menu a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}