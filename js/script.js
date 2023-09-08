$(document).ready(function(){

    $('.menu_btn').on('click', function(e){
        e.preventDefault();
        $('.menu').toggleClass('menu_active');
    });


    $('.btn_search').on('click', function(e){
        e.preventDefault();
        $('.search_form').toggleClass('search_form_active');
    });

    $('.basket_btn').on('click', function(e){
        e.preventDefault();
        $('.bin-bin').toggleClass('bin-bin_active');
    });

    const anchors = document.querySelectorAll('a[href*="#"]')

    for (let anchor of anchors) {
        anchor.addEventListener("click", function(event){
            event.preventDefault();
            const blockID = anchor.getAttribute('href')
            document.querySelector('' + blockID).scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        })
    }
})