document.addEventListener("DOMContentLoaded", function () {
    const carousel = new bootstrap.Carousel(document.querySelector("#carouselExemplo"), {
        interval: 2000,   // tempo entre slides (ms)
        ride: true,       // auto-play ao carregar
        wrap: true,       // volta ao início
        keyboard: true,   // controla com setas do teclado
        pause: "hover",   // pausa ao passar mouse
        touch: true       // swipe no mobile
    });
});