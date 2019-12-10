$(document).ready(function() {
    $(function() {
        $('.current-year').html((new Date).getFullYear());
    });
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
    $("#mobileNavigation").append($("#mobileSocial"));

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
});