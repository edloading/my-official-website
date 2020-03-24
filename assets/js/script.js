// Loading Screen
$(window).ready(function () {
    setTimeout(function(){
        $("#loader").fadeOut(800);
    }, 3000);
});

// Menu functions
    // If menu button is clicked
    $(".menu-button").click(function() {
        $(".menu-button").css("display", "none");   // Hide menu button
        $(".close-button").css("display", "block"); // Show close button
        $("html").css("overflow", "hidden");        // Fix overflow issues
        $(".mobile-menu").fadeIn(400);              // Show menu
    });

    // If close button or link is clicked
    $(".close-button, .mobile-menu a").click(function() {
        $(".menu-button").css("display", "block");  // Show menu button
        $(".close-button").css("display", "none");  // Hide close button
        $(".mobile-menu").fadeOut(400);             // Hide menu
        $("html").css("overflow-y", "visible");     // Set overflow back to normal
    });

    // If "Home" is clicked
    $(".desktop-menu li:nth-child(1), .mobile-menu li:nth-child(1)").click(function() {
        $(".desktop-menu li").css("border-bottom", "none");
        $(".desktop-menu li:nth-child(1)").css("border-bottom", "2px solid white");
        
        $(".desktop-menu h1").css("opacity", "0");

        $(".page").fadeOut(400);
        setTimeout(function () {
            $("#home").fadeIn(400);
        }, 800);
    });

    // If "Portfolio" is clicked
    $(".desktop-menu li:nth-child(2), button, .mobile-menu li:nth-child(2)").click(function() {
        $(".desktop-menu li").css("border-bottom", "none");
        $(".desktop-menu li:nth-child(2)").css("border-bottom", "2px solid #fff2ac");
        
        $(".desktop-menu h1").css("opacity", "1");

        $(".page").fadeOut(400);
        setTimeout(function () {
            $("#portfolio").fadeIn(400);
        }, 800);
        
        // Fade in boxes
        setTimeout(function () {
            $("#pink").css("opacity", "1");
        }, 200);
        setTimeout(function () {
            $("#wheaton").css("opacity", "1");
        }, 500);
        setTimeout(function () {
            $("#cks").css("opacity", "1");
        }, 700);
        setTimeout(function () {
            $("#lcdhf").css("opacity", "1");
        }, 900);
        setTimeout(function () {
            $("#wolm").css("opacity", "1");
        }, 1100);
        setTimeout(function () {
            $("#balh").css("opacity", "1");
        }, 1300);
    });

    // If "About Me" is clicked
    $(".desktop-menu li:nth-child(3), .mobile-menu li:nth-child(3)").click(function() {
        $(".desktop-menu li").css("border-bottom", "none");
        $(".desktop-menu li:nth-child(3)").css("border-bottom", "2px solid #fff2ac");
        
        $(".desktop-menu h1").css("opacity", "1");

        $(".page").fadeOut(400);
        setTimeout(function () {
            $("#what-do-i-do").fadeIn(400);
        }, 800);
        
        // Quote and picture fade in
        setTimeout(function () {
            $("intro").css("opacity", "1");
        }, 1600);
        setTimeout(function () {
            $("tag").css("opacity", "1");
        }, 3100);
        setTimeout(function () {
            $(".desktop-pic").css("opacity", "1");
            $(".desktop-pic").css("transform", "translateX(0px)");
        }, 3000);
        setTimeout(function () {
            $(".info-wrapper").css("opacity", "1");
        }, 4000);
    });

    // If "Contact" is clicked
    $(".desktop-menu li:nth-child(4), .mobile-menu li:nth-child(4)").click(function() {
        $(".desktop-menu li").css("border-bottom", "none");
        $(".desktop-menu li:nth-child(4)").css("border-bottom", "2px solid #fff2ac");
        
        $(".desktop-menu h1").css("opacity", "1");

        $(".page").fadeOut(400);
        setTimeout(function () {
            $("#contact").fadeIn(400);
        }, 800);
        
        // "Available" flash green
        setTimeout(function () {
            $("green").css("color", "#2ecc71");
        }, 2000);
    });


//Fade elements into view
$(window).scroll(function () {
    // This is then function used to detect if the element is scrolled into view
    function elementScrolled(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
    }
    // When Portfolio Showcase comes, fade in each box one by one
    if (elementScrolled('.showcase')) {
        setTimeout(function () {
            $("#pink").css("opacity", "1");
        }, 200);
        setTimeout(function () {
            $("#wheaton").css("opacity", "1");
        }, 500);
        setTimeout(function () {
            $("#cks").css("opacity", "1");
        }, 700);
        setTimeout(function () {
            $("#lcdhf").css("opacity", "1");
        }, 900);
        setTimeout(function () {
            $("#wolm").css("opacity", "1");
        }, 1100);
        setTimeout(function () {
            $("#balh").css("opacity", "1");
        }, 1300);
    }
});