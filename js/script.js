document.addEventListener('DOMContentLoaded', () => {
    // Fade-in animation for elements with class 'fade-in-up'
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in-up');
    fadeElements.forEach(el => {
        observer.observe(el);
    });

    // Optional: Add a subtle tilt effect to glass cards on mouse move
    const cards = document.querySelectorAll('.glass-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Calculate rotation based on mouse position
            // Very subtle rotation
            const xMid = rect.width / 2;
            const yMid = rect.height / 2;

            const rotateX = ((y - yMid) / yMid) * -2; // Max 2 degrees
            const rotateY = ((x - xMid) / xMid) * 2;  // Max 2 degrees

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)'; // Reset
        });
    });
});
