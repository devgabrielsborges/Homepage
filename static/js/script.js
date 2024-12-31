// JavaScript for interactivity

document.addEventListener('DOMContentLoaded', function () {
    // Interactive Hero Button
    const heroButton = document.querySelector('.btn-primary');
    heroButton.addEventListener('click', function () {
        alert('Thanks for your interest! Let\'s work together!');
    });

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-dark', 'navbar-dark');
            navbar.classList.remove('bg-light', 'navbar-light');
        } else {
            navbar.classList.add('bg-light', 'navbar-light');
            navbar.classList.remove('bg-dark', 'navbar-dark');
        }
    });

    // Project Card Hover Effect (Optional Enhancements)
    const projectCards = document.querySelectorAll('.card');
    projectCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.1)';
            card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
        });
        card.addEventListener('mouseout', () => {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
    });
});
