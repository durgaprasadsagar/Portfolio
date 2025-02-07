// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typing effect in the hero section
const typingText = "Hi, I’m Durga Prasad Vaddepalli";
let index = 0;
const speed = 100;

function type() {
    if (index < typingText.length) {
        document.querySelector('.intro h1').textContent += typingText.charAt(index);
        index++;
        setTimeout(type, speed);
    }
}

// Toggle Dark Mode
    function toggleDarkMode() {
        document.body.classList.toggle("dark-mode");
        const mode = document.body.classList.contains("dark-mode") ? "🌞 Light Mode" : "🌙 Dark Mode";
        darkModeBtn.innerText = mode;
        localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
    }

    // Check Local Storage for Dark Mode
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
        darkModeBtn.innerText = "🌞 Light Mode";
    }

    // Event Listeners
    revealSections();
    window.addEventListener("scroll", revealSections);
    window.toggleDarkMode = toggleDarkMode;


window.onload = function() {
    type();

    // Form validation
    document.querySelector('form').addEventListener('submit', function(e) {
        const name = document.querySelector('input[placeholder="Name"]').value.trim();
        const email = document.querySelector('input[placeholder="Email"]').value.trim();
        const message = document.querySelector('textarea[placeholder="Message"]').value.trim();

        if (!name || !email || !message) {
            e.preventDefault();
            alert('Please fill out all fields.');
        } else {
            alert('Message sent successfully!');
        }
    });

    // Highlight active navigation link
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLi = document.querySelectorAll('nav ul li a');

        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLi.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').includes(current)) {
                a.classList.add('active');
            }
        });
    });
};
