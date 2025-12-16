// QIRT ASIA 2027 - Main JavaScript

// ========== Mobile Menu Toggle ==========
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const dropdowns = document.querySelectorAll('.dropdown');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = mobileMenuToggle.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        }
    });
}

// Mobile dropdown toggle
dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('.nav-link');
    if (link && window.innerWidth < 768) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            dropdown.classList.toggle('active');
        });
    }
});

// ========== Sticky Header ==========
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ========== Smooth Scrolling ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#!') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerHeight = header.offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
            }
        }
    });
});

// ========== Countdown Timer ==========
function updateCountdown() {
    const conferenceDate = new Date('2027-03-09T09:00:00').getTime();
    const now = new Date().getTime();
    const distance = conferenceDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const countdownElement = document.getElementById('countdown');
    if (countdownElement) {
        if (distance > 0) {
            countdownElement.innerHTML = `
        <div class="countdown-item">
          <span class="countdown-number">${days}</span>
          <span class="countdown-label">Days</span>
        </div>
        <div class="countdown-item">
          <span class="countdown-number">${hours}</span>
          <span class="countdown-label">Hours</span>
        </div>
        <div class="countdown-item">
          <span class="countdown-number">${minutes}</span>
          <span class="countdown-label">Minutes</span>
        </div>
        <div class="countdown-item">
          <span class="countdown-number">${seconds}</span>
          <span class="countdown-label">Seconds</span>
        </div>
      `;
        } else {
            countdownElement.innerHTML = '<h3>Conference is Live!</h3>';
        }
    }
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();

// ========== Intersection Observer for Animations ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards and timeline items
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.card, .timeline-item, .section-header');
    animatedElements.forEach(el => observer.observe(el));
});

// ========== Form Validation ==========
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let isValid = true;
        const requiredFields = form.querySelectorAll('[required]');

        requiredFields.forEach(field => {
            const errorElement = field.nextElementSibling;

            if (!field.value.trim()) {
                isValid = false;
                field.classList.add('error');
                if (errorElement && errorElement.classList.contains('error-message')) {
                    errorElement.textContent = 'This field is required';
                    errorElement.style.display = 'block';
                }
            } else if (field.type === 'email' && !validateEmail(field.value)) {
                isValid = false;
                field.classList.add('error');
                if (errorElement && errorElement.classList.contains('error-message')) {
                    errorElement.textContent = 'Please enter a valid email address';
                    errorElement.style.display = 'block';
                }
            } else {
                field.classList.remove('error');
                if (errorElement && errorElement.classList.contains('error-message')) {
                    errorElement.style.display = 'none';
                }
            }
        });

        if (isValid) {
            // Check if form has an action (like FormSubmit)
            if (form.action && form.id === 'contact-form') {
                const submitBtn = form.querySelector('button[type="submit"]');
                const originalBtnText = submitBtn.textContent;

                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;

                // Use FormSubmit AJAX endpoint
                // We add /ajax/ to the URL if it's a standard FormSubmit URL
                let actionUrl = form.action;
                if (actionUrl.includes('formsubmit.co') && !actionUrl.includes('/ajax/')) {
                    actionUrl = actionUrl.replace('formsubmit.co/', 'formsubmit.co/ajax/');
                }

                fetch(actionUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(Object.fromEntries(new FormData(form)))
                })
                    .then(response => response.json())
                    .then(data => {
                        alert('Message sent successfully! We will get back to you soon.');
                        form.reset();
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        alert('There was an error sending your message. Please try again later.');
                    })
                    .finally(() => {
                        submitBtn.textContent = originalBtnText;
                        submitBtn.disabled = false;
                    });
            } else {
                // Fallback / original behavior for other forms
                alert('Form submitted successfully!');
                form.reset();
            }
        }
    });

    // Real-time validation
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            const errorElement = input.nextElementSibling;

            if (input.hasAttribute('required') && !input.value.trim()) {
                input.classList.add('error');
                if (errorElement && errorElement.classList.contains('error-message')) {
                    errorElement.textContent = 'This field is required';
                    errorElement.style.display = 'block';
                }
            } else if (input.type === 'email' && input.value && !validateEmail(input.value)) {
                input.classList.add('error');
                if (errorElement && errorElement.classList.contains('error-message')) {
                    errorElement.textContent = 'Please enter a valid email address';
                    errorElement.style.display = 'block';
                }
            } else {
                input.classList.remove('error');
                if (errorElement && errorElement.classList.contains('error-message')) {
                    errorElement.style.display = 'none';
                }
            }
        });
    });
}

// Initialize form validation for registration form
document.addEventListener('DOMContentLoaded', () => {
    validateForm('registration-form');
    validateForm('contact-form');
});

// ========== Back to Top Button ==========
const backToTopButton = document.getElementById('back-to-top');

if (backToTopButton) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ========== Image Lazy Loading ==========
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ========== Console Welcome Message ==========
console.log('%c QIRT ASIA 2027 ', 'background: #ED2939; color: white; font-size: 20px; padding: 10px;');
console.log('%c March 9-12, 2027 | Singapore ', 'font-size: 14px; color: #ED2939;');
console.log('Website developed for the 5th Asian Quantitative Infrared Thermography Conference');
