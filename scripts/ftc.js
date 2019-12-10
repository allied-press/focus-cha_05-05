$(document).ready(function() {
    $(function() {
        $('.current-year').html((new Date).getFullYear());
    });

    /* Navigation */
    var alterClass = function() {
        var ww = document.body.clientWidth;
        if (ww < 1160) {
            $('body').addClass('force-mobile-nav');
        } else if (ww >= 1161) {
            $('body').removeClass('force-mobile-nav');
        };
    };
    $(window).resize(function() {
        alterClass();
    });

    alterClass();

    $("#mainNavigation > :last-child a").replaceWith("<a href='/search'><i class='fas fa-search'></i></a>");
    $("#mainNavigation .folder-toggle").append("<i class='fas fa-chevron-down'></i>");

    $("#promotedGalleryWrapper").append($("#breadtrail"));
    $(".index-section:first-child .promoted-gallery-wrapper").append($("#breadtrail"));
    $(".banner-thumbnail-wrapper").append($("#breadtrail"));
    $("#mobileNavigation").append($("#mobileSocial"));

    /* Blog Page Banner */
    $(".entry").each(function() {
        $(".p-summary", this).prepend($(".entry-header", this));
    });
    $(".prev-label").text(" Newer Posts")
    $(".next-label").text("Previous Posts ");
    $(".prev-label").prepend("<i class='fas fa-arrow-left'></i>");
    $(".next-label").append("<i class='fas fa-arrow-right'></i>");

    $('.banner-thumbnail-wrapper #thumbnail').html($('#blogBanner').html());


    /* Accordion */
    $('.accordion-wrapper .sqs-block-content h3').addClass('ui-closed').css('cursor', 'pointer');
    $(".accordion-wrapper .sqs-block-content h3").nextUntil("h3").addClass('accordion-content');
    $(".accordion-wrapper .sqs-block-content h3").each(function(index) {
        $(this).nextUntil(".accordion-wrapper .sqs-block-content h3").wrapAll("<div class='accordion-section'></div>");
    });
    $(".accordion-section").slideToggle();
    $(".accordion-wrapper .sqs-block-content h3").click(function() {

        $(this).nextUntil("h3").slideToggle();
        $(this).toggleClass('ui-closed ui-open');
    });

    /* Home Page Slides */
    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
});