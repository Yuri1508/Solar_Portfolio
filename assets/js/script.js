$(document).ready(function () {
    // -----------------------------
    // function scroll navbar
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // -----------------------------

    // -----------------------------
    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });
    // -----------------------------

    // ----------------------------- 
    // function click a
    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
    // ----------------------------- 

    // ----------------------------- 
    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // ----------------------------- 

    // ----------------------------- 
    // check for saved 'darkMode' in localStorage
    let darkMode = localStorage.getItem('darkMode');

    const darkModeToggle = document.querySelector('#dark-mode-toggle');

    const enableDarkMode = () => {
        // 1. Add the class to the body
        document.body.classList.add('darkmode');
        // 2. Update darkMode in localStorage
        localStorage.setItem('darkMode', 'enabled');
    }

    const disableDarkMode = () => {
        // 1. Remove the class from the body
        document.body.classList.remove('darkmode');
        // 2. Update darkMode in localStorage 
        localStorage.setItem('darkMode', null);
    }

    // If the user already visited and enabled darkMode
    // start things off with it on
    if (darkMode === 'enabled') {
        enableDarkMode();
    }

    // When someone clicks the button
    darkModeToggle.addEventListener('click', () => {
        // get their darkMode setting
        darkMode = localStorage.getItem('darkMode');

        // if it not current enabled, enable it
        if (darkMode !== 'enabled') {
            enableDarkMode();
            // if it has been enabled, turn it off  
        } else {
            disableDarkMode();
        }
    });
    // ----------------------------- 

    // ----------------------------- 
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Développeur", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Développeur", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    // ----------------------------- 

    // ----------------------------- 
    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            }
        }
    });
    // ----------------------------- 
});