// script.js

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    const email = document.querySelector('input[type="email"]').value;
    const name = document.querySelector('input[name="name"]').value;
    if (!email || !name) {
        e.preventDefault();
        alert('Please fill in all fields.');
    }
});

// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const menu = document.querySelector('.menu');
mobileMenuToggle.addEventListener('click', function() {
    menu.classList.toggle('active');
});

// Interactive Features
const buttons = document.querySelectorAll('.interactive-button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Button Clicked!');
    });
});
