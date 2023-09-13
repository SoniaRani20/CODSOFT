$(document).ready(function() {
    $('').click(function(){
        $(this).toggleclass('fa-times');
        $('header').toggleclass('toggle');
    });
    $(window).on('scroll load',function(){
       
        $('header').removeclass('toggle');

        if( $(window).scrollTop() > 0){
            $('.top').show();
        }
        else{
            $('.top').hide();
        }
    });

    $('a[href*="#"]').on('click',function(e){
     e.preventDefault();
     $('body').animate({
   scrollTop : $($(this).attr('href')).offset().top,
}, 
500,
'linear'
);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const scrollButton = document.getElementById("scroll-up-button");

    
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollButton.classList.add("show");
        } else {
            scrollButton.classList.remove("show");
        }
    });

    
    scrollButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});
