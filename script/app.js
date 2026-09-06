lucide.createIcons();

// Scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Mobile menu
document.getElementById('mobile-toggle').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});

// FAQ accordion
document.querySelectorAll('.faq-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
        const answer = btn.nextElementSibling;
        const icon = btn.querySelector('[data-lucide]');
        answer.classList.toggle('open');
        icon.style.transform = answer.classList.contains('open') ? 'rotate(180deg)' : '';
    });
});

// Booking form
document.getElementById('booking-form').addEventListener('submit', function (e) {
    e.preventDefault();
    this.reset();
    document.getElementById('booking-success').classList.remove('hidden');
    setTimeout(() => document.getElementById('booking-success').classList.add('hidden'), 5000);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
            document.getElementById('mobile-menu').classList.add('hidden');
        }
    });
});
