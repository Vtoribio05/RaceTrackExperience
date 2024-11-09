// Script para cambiar entre modo claro y oscuro
const darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

// Función para el efecto Fade-In al hacer scroll
document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');

    // Configurar el observador de intersección
    const observerOptions = {
        root: null, // usar el viewport del navegador
        rootMargin: '0px',
        threshold: 0.1 // disparar el callback cuando el 10% del elemento es visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Si la tarjeta está en el viewport, agregar la clase 'show'
                entry.target.classList.add('show');
                // Dejar de observar la tarjeta después de que se haya mostrado
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observar cada tarjeta
    cards.forEach(card => {
        observer.observe(card);
    });
});



