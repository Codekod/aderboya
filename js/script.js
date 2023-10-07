const logo = document.querySelector(".logo");

window.addEventListener("scroll", () => {
    const services = document.getElementById("services");
    const servicesTop = services.offsetTop;
    const scrollTop = window.scrollY;

    if (scrollTop >= servicesTop) {
        // Scroll, "services" bölümünün üzerine geldiğinde logo değişikliğini yapın
        logo.src = "./img/white_logo_transparent_background.png";
    } else {
        // Scroll, "services" bölümünün üzerinden ayrıldığında orijinal logo'ya geri dönün
        logo.src = "./img/logo_transparent_background.png";
    }
});