$(document).ready(function(){
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('#navbar').toggleClass('#navbar-toggle');
    });
    $(window).on('load scroll',function(){
       
            $('.fa-bars').remoClass('fa-times');
            $('#navbar').remoClass('#navbar-toggle');

    });
});