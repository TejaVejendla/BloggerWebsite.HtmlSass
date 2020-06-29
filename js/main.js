$(document).ready(function(){

    $nav = $('.navbar');
    $toggleCollapse = $('.toggle-collapse');

    $toggleCollapse.click(function() {
        $nav.toggleClass('collapse');
    })

});