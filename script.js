$(document).ready(function () {

    // Display current year
    $("#year").text(new Date().getFullYear());

    // Display today's date on Bio-data page
    $("#today").text(
        new Date().toLocaleDateString("en-IN")
    );

    // Mobile navigation
    $("#menuBtn").click(function () {

        $("#navLinks").toggleClass("open");

        const icon = $(this).find("i");

        if ($("#navLinks").hasClass("open")) {
            icon.removeClass("fa-bars");
            icon.addClass("fa-xmark");
        } else {
            icon.removeClass("fa-xmark");
            icon.addClass("fa-bars");
        }

    });

    // Close mobile menu
    $(".nav-links a").click(function () {

        $("#navLinks").removeClass("open");

        $("#menuBtn i")
            .removeClass("fa-xmark")
            .addClass("fa-bars");

    });

    // Smooth scrolling
    $('a[href^="#"]').click(function (event) {

        const target = $(this).attr("href");

        if (target !== "#" && $(target).length) {

            event.preventDefault();

            $("html, body").animate({
                scrollTop: $(target).offset().top - 70
            }, 600);

        }

    });

});


function printResume() {

    window.print();

}