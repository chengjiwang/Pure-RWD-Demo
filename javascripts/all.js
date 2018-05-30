$( document ).ready(function() {
    $('#js-show-menu').on('click',  function(e){
        e.preventDefault();
        $('.header').toggleClass('menu-show');
    });
});

