window.addEventListener("scroll", ()=> {
    let header = document.querySelector("header");
    header.classList.toggle("scroll", window.scrollY > 50);
})
let button = document.querySelector("#button");
let search = document.querySelector("header .search")
button.addEventListener("click", ()=>{
    search.style.display = "block";
})
// Carousel Section
$(document).ready(function(){
    $(".banner .owl-carousel").owlCarousel({
        items:1,
        loop:true,
        smartSpeed:1500,
        nav:true,
        navText:["<i class='fa-solid fa-chevron-left'></i>","<i class='fa-solid fa-chevron-right'></i>"],
        dots:false,
        dotsEach:false,
        responsiveClass: true,
        responsive:{
            0:{
                nav:false,
            },
            768:{
                nav:false,
            },
            991:{
                nav:true,
            }
        }
    });
    $(".story .owl-carousel").owlCarousel({
        items:2,
        loop:true,
        smartSpeed:1500,
        dotsEach:true,
    });
    $(".client .owl-carousel").owlCarousel({
        items:2,
        loop:true,
        smartSpeed:1500,
        margin:40,
        dotsEach:true,
    });
  });

let progress = document.querySelectorAll('.progress span'),
    spans = document.querySelectorAll('.progress-title span');

progress.forEach((prog) => {
    prog.style.width = prog.dataset.width;
});

spans.forEach((span) => {
    span.style.left = span.dataset.num;
    span.style.opacity = '1';
    span.style.visibility = 'visible';
});

$(".number").counterUp({time:2000});

$(document).ready(function(){
    $('.list').click(function(){
        const value = $(this).attr('data-filter');
        if (value == 'all'){
            $('.item-box').show('1000');
        }
        else{
            $('.item-box').not('.'+value).hide('1000');
            $('.item-box').filter('.'+value).show('1000');
        }
    })
    $('.list').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })
})