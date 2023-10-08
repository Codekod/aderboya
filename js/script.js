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
