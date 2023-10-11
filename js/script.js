/* Responsive Nav Menu */
const navMenu = () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navList = document.querySelector('.nav-list');

    navbarToggler.addEventListener('click', () => {
        navList.classList.toggle('nav-active');
        navbarToggler.classList.toggle('toggle');
    })

};

navMenu();






/* section a göre logo değiştirme */
const logo = document.querySelector(".logo img");

window.addEventListener("scroll", () => {
    const services = document.getElementById("services");
    const portfolio = document.getElementById("portfolio");
    const team = document.getElementById("team");
    const blog = document.getElementById("blog");
    const contact = document.getElementById("contact");

    const servicesTop = services.offsetTop;
    const servicesBottom = services.offsetTop + services.offsetHeight;

    const portfolioTop = portfolio.offsetTop;
    const portfolioBottom = portfolio.offsetTop + portfolio.offsetHeight;

    const teamTop = team.offsetTop;
    const teamBottom = team.offsetTop + team.offsetHeight;

    const blogTop = blog.offsetTop;
    const blogBottom = blog.offsetTop + blog.offsetHeight;

    const contactTop = contact.offsetTop;

    const scrollTop = window.scrollY + window.innerHeight;

    if (scrollTop < servicesTop) {
        logo.src = "./img/logo_transparent_background.png";
    } else if (scrollTop >= servicesTop && scrollTop <= servicesBottom) {
        logo.src = "./img/white_logo_transparent_background.png";
    } else if (scrollTop > servicesBottom && scrollTop < blogTop) {
        logo.src = "./img/logo_transparent_background.png";
    } else if (scrollTop >= blogTop && scrollTop <= blogBottom) {
        logo.src = "./img/white_logo_transparent_background.png";
    } else if (scrollTop > blogBottom && scrollTop < contactTop) {
        logo.src = "./img/logo_transparent_background.png";
    } else {
        logo.src = "./img/white_logo_transparent_background.png";
    }
});


/* SCROLL REVEAL ANIMATIONS */

ScrollReveal().reveal('.ani-left', {
    origin: 'left',
    distance: '10rem',
    duration: 1000,
    easing: 'ease-in'
});
ScrollReveal().reveal('.ani-right', {
    origin: 'right',
    distance: '10rem',
    duration: 1000,
    easing: 'ease-in'
});

ScrollReveal().reveal('.ani-fade-up', {
    opacity: 0,
    easing: 'ease-in'
});
ScrollReveal().reveal('.ani-bottom', {
    origin: 'bottom',
    distance: '10rem',
    duration: 1000,
    easing: 'ease-in'
});

ScrollReveal().reveal('.ani-delay', {
    delay: 500
});

ScrollReveal().reveal('.ani-delay-2', {
    delay: 1000
});


