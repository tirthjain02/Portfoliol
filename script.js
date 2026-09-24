// Mobile Navigation
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Update Copyright Year
const yearElement = document.getElementById('year');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Simple form submission handler
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const btn = contactForm.querySelector('.btn-submit');
        const originalText = btn.textContent;
        
        btn.textContent = 'Message Sent!';
        btn.style.backgroundColor = 'var(--text-main)';
        btn.style.color = 'var(--bg-base)';
        
        contactForm.reset();
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.backgroundColor = '';
            btn.style.color = '';
        }, 3000);
    });
}

// Scroll Animation Observer
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Select elements to animate on scroll
const animatedElements = document.querySelectorAll('.section-header, .skill-card, .project-card, .timeline-item, .about-highlights, .contact-info, .contact-form');

animatedElements.forEach(el => {
    el.classList.add('fade-up-element');
    observer.observe(el);
});
