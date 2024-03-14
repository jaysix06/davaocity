$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin:10,
        responsiveClass: true,
        center: true,
        navText:[
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        responsive:{
            0:{
                items:1,
            },
            425:{
                items:1,
            },
            0:{
                items:1,
            },
            768:{
                items:2,
                nav: true
            },
            1024:{
                items:2,
                nav: true
            },
            1440:{
                items:3,
                nav: true
            },
            2560:{
                items:3,
                nav: true
            }
        }
    })
});