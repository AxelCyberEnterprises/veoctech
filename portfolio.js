const navLinks = document.querySelectorAll(".nav-item");

navLinks.forEach(link => {
  link.addEventListener("click", (event) => {
    // remove active class from all links
    navLinks.forEach(link => link.classList.remove("active"));
    // add active class to clicked link
    link.classList.add("active");
  });
});



$(document).ready(function () {
    if ($(window).width() > 991){
    $('.navbar-light .d-menu').hover(function () {
            $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
        }, function () {
            $(this).find('.sm-menu').first().stop(true, true).delay(120).slideUp(100);
        });
        }
    });


    
    ScrollReveal().reveal('.section1-h1', { interval: 500 });
ScrollReveal().reveal('.section1-h4', { delay: 700 });

    
    
    ScrollReveal().reveal('.work-1', { delay: 900 });
    ScrollReveal().reveal('.work-2', { delay: 1000 });
    ScrollReveal().reveal('.work-3', { delay: 1100 });
    ScrollReveal().reveal('.work-4', { delay: 1200 });
    ScrollReveal().reveal('.work-5', { delay: 1300 });
    ScrollReveal().reveal('.work-6', { delay: 1400 });