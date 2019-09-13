jQuery(function () {
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() < 600) {
            $("#home-link").addClass("active");
            $("#about-link").removeClass("active");
            $("#projects-link").removeClass("active");
            $("#contact-link").removeClass("active");
        } else if (jQuery(this).scrollTop() > 600) {
            $("#home-link").removeClass("active");
            $("#about-link").addClass("active");
        } else if (jQuery(this).scrollTop() > 800) {
            $("#about-link").removeClass("active");
            $("#projects-link").addClass("active");
        } else if (jQuery(this).scrollTop() > 1800) {
            $("#projects-link").removeClass("active");
            $("#contact-link").addClass("active")
        }
    });
});