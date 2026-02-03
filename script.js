document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-list a');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            
            // Icon animation switch
            const icon = mobileToggle.querySelector('i');
            if (nav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            const icon = mobileToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // Sticky Header Scroll Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(15, 23, 42, 0.95)';
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
        } else {
            header.style.background = 'rgba(15, 23, 42, 0.9)';
            header.style.boxShadow = 'none';
        }
    });

    // Add to Cart Animation
    const cartButtons = document.querySelectorAll('.btn-icon-sm');
    const badge = document.querySelector('.badge');
    let cartCount = 0;

    cartButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            // Animation
            const button = this;
            button.innerHTML = '<i class="fas fa-check"></i>';
            button.style.background = '#22c55e'; // Success green
            
            // Increment Count
            cartCount++;
            badge.textContent = cartCount;
            badge.classList.add('pop');
            setTimeout(() => badge.classList.remove('pop'), 300);

            // Reset button
            setTimeout(() => {
                button.innerHTML = '<i class="fas fa-plus"></i>';
                button.style.background = ''; // Revert to CSS
            }, 1000);
        });
    });
});
