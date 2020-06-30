$(document).ready(function () {

    $nav = $('.navbar');
    $toggleCollapse = $('.toggle-collapse');

    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })

    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            736: {
                items: 2
            },
            980: {
                items: 3
            }
        }
    });

});