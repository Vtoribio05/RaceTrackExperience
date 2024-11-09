document.addEventListener("DOMContentLoaded", function() {
    // Inicializar el fondo de la página como blanco al cargar
    document.body.style.backgroundColor = '#ffffff'; // Fondo blanco por defecto
    window.onload = function() {
        alert("¡Bienvenido a Racetrack Experience! Disfruta de las últimas noticias y novedades del mundo de las carreras.");
    };
    // Modo oscuro
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        darkModeToggle.textContent = isDarkMode ? 'Modo Claro' : 'Modo Oscuro';
        
        // Cambiar el fondo de la página según el modo
        if (isDarkMode) {
            document.body.style.backgroundColor = '#141414'; // Fondo oscuro
        } else {
            document.body.style.backgroundColor = '#ffffff'; // Fondo blanco
        }
    });

    // Configuración del Intersection Observer para animaciones
    const observerOptions = {
        threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); 
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Seleccionar todos los elementos que queremos animar
    const elementsToAnimate = document.querySelectorAll('.fade-in');
    elementsToAnimate.forEach(element => {
        observer.observe(element); // Inicia la observación de cada elemento
    });

    // Advertencia de cookies
    const cookieWarning = document.createElement('div');
    cookieWarning.classList.add('alert', 'alert-warning', 'fixed-bottom', 'm-0', 'd-flex', 'justify-content-between', 'align-items-center');
    cookieWarning.innerHTML = `
        <span>Este sitio utiliza cookies para mejorar la experiencia del usuario.</span>
        <button class="btn-close" aria-label="Close"></button>
    `;
    document.body.appendChild(cookieWarning);

    const closeButton = cookieWarning.querySelector('.btn-close');
    closeButton.addEventListener('click', () => {
        cookieWarning.remove(); // Elimina la advertencia al hacer clic en cerrar
    });

    // Lógica para mostrar/ocultar el navbar al hacer scroll
    let lastScrollY = 0;
    let ticking = false;
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        lastScrollY = window.scrollY;

        if (!ticking) {
            window.requestAnimationFrame(() => {
                if (lastScrollY > 100) { 
                    navbar.style.transform = 'translateY(-100%)'; 
                } else {
                    navbar.style.transform = 'translateY(0)';
                }
                ticking = false; 
            });

            ticking = true; 
        }
    });
});


