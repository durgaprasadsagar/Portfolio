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
const nameInput = document.querySelector('input[type="text"]');
const emailInput = document.querySelector('input[type="email"]');
const messageInput = document.querySelector('textarea');

form.addEventListener('submit', function(e) {
    let valid = true;
    
    // Name Validation
    if (nameInput.value.trim() === '') {
        alert('Please enter your name.');
        valid = false;
    }
    
    // Email Validation
    if (emailInput.value.trim() === '') {
        alert('Please enter your email.');
        valid = false;
    } else if (!validateEmail(emailInput.value.trim())) {
        alert('Please enter a valid email address.');
        valid = false;
    }
    
    // Message Validation
    if (messageInput.value.trim() === '') {
        alert('Please enter your message.');
        valid = false;
    }
    
    if (!valid) {
        e.preventDefault();
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}




// Mobile Navigation Toggle (optional)
const nav = document.querySelector('nav ul');
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Menu';
toggleButton.classList.add('nav-toggle');
document.querySelector('header').prepend(toggleButton);

toggleButton.addEventListener('click', () => {
    nav.classList.toggle('open');
});
