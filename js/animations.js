// =================================================================
// Animation Controllers
// =================================================================

document.addEventListener('DOMContentLoaded', function() {
    initializeScrollReveal();
    initializeCounterAnimations();
    initializeParallax();
    initializeHoverEffects();
});

// =================================================================
// Scroll Reveal Animations
// =================================================================

function initializeScrollReveal() {
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    
                    // Optional: Unobserve after revealing (animation happens once)
                    // observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        // Observe elements with scroll-reveal classes
        const revealElements = document.querySelectorAll(
            '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale'
        );
        
        revealElements.forEach(el => observer.observe(el));
        
        // Add scroll-reveal class to elements that should animate on scroll
        const elementsToReveal = [
            '.feature-card',
            '.benefit-card',
            '.step',
            '.subject-card',
            '.pricing-card',
            '.safety-card',
            '.testimonial-card'
        ];
        
        elementsToReveal.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach((el, index) => {
                if (!el.classList.contains('scroll-reveal')) {
                    el.classList.add('scroll-reveal');
                    el.style.transitionDelay = `${index * 0.1}s`;
                    observer.observe(el);
                }
            });
        });
    }
}

// =================================================================
// Counter Animations for Stats
// =================================================================

function initializeCounterAnimations() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200; // Animation speed
    
    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-target') || counter.textContent);
        const increment = target / speed;
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    };
    
    if ('IntersectionObserver' in window) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                    animateCounter(entry.target);
                    entry.target.classList.add('counted');
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        counters.forEach(counter => {
            // Store original value
            if (!counter.getAttribute('data-target')) {
                counter.setAttribute('data-target', counter.textContent);
            }
            counterObserver.observe(counter);
        });
    }
}

// =================================================================
// Parallax Effects
// =================================================================

function initializeParallax() {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    if (parallaxElements.length > 0 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            
            parallaxElements.forEach(el => {
                const speed = el.getAttribute('data-speed') || 0.5;
                const yPos = -(scrolled * speed);
                el.style.transform = `translateY(${yPos}px)`;
            });
        });
    }
}

// =================================================================
// Advanced Hover Effects
// =================================================================

function initializeHoverEffects() {
    // Card tilt effect on mouse move
    const cards = document.querySelectorAll('.feature-card, .pricing-card, .subject-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            if (window.innerWidth > 768) { // Only on desktop
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
            }
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
}

// =================================================================
// Gradient Text Animation
// =================================================================

function animateGradientText() {
    const gradientTexts = document.querySelectorAll('.gradient-text');
    
    gradientTexts.forEach(text => {
        text.classList.add('gradient-text-animated');
    });
}

// Initialize gradient text animation
document.addEventListener('DOMContentLoaded', animateGradientText);

// =================================================================
// Stagger Animation for Lists
// =================================================================

function staggerAnimation(selector, delay = 100) {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * delay);
    });
}

// =================================================================
// Loading Animation
// =================================================================

function showLoadingAnimation() {
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = '<div class="spinner"></div>';
    
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: white;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        transition: opacity 0.5s ease;
    `;
    
    document.body.appendChild(loader);
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.remove();
            }, 500);
        }, 300);
    });
}

// Optional: Show loading animation
// showLoadingAnimation();

// =================================================================
// Scroll Progress Bar
// =================================================================

function createScrollProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 4px;
        background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
        z-index: 9999;
        transform-origin: left;
        transform: scaleX(0);
        transition: transform 0.1s ease;
    `;
    
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight);
        progressBar.style.transform = `scaleX(${scrolled})`;
    });
}

// Initialize scroll progress bar
document.addEventListener('DOMContentLoaded', createScrollProgressBar);

// =================================================================
// Entrance Animations for Hero Section
// =================================================================

function animateHeroSection() {
    const heroElements = [
        { selector: '.hero-title', delay: 0 },
        { selector: '.hero-subtitle', delay: 200 },
        { selector: '.hero-cta', delay: 400 },
        { selector: '.hero-stats', delay: 600 }
    ];
    
    heroElements.forEach(({ selector, delay }) => {
        const element = document.querySelector(selector);
        if (element) {
            setTimeout(() => {
                element.style.opacity = '0';
                element.style.transform = 'translateY(30px)';
                
                requestAnimationFrame(() => {
                    element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                });
            }, delay);
        }
    });
}

// =================================================================
// Button Ripple Effect
// =================================================================

function addRippleEffect() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.6);
                left: ${x}px;
                top: ${y}px;
                transform: scale(0);
                animation: rippleEffect 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
    
    // Add ripple animation to CSS
    if (!document.querySelector('#ripple-style')) {
        const style = document.createElement('style');
        style.id = 'ripple-style';
        style.textContent = `
            @keyframes rippleEffect {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize ripple effect
document.addEventListener('DOMContentLoaded', addRippleEffect);

// =================================================================
// Image Fade-In on Load
// =================================================================

function fadeInImages() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease';
        
        if (img.complete) {
            img.style.opacity = '1';
        } else {
            img.addEventListener('load', () => {
                img.style.opacity = '1';
            });
        }
    });
}

// Initialize image fade-in
document.addEventListener('DOMContentLoaded', fadeInImages);

// =================================================================
// Export animation utilities
// =================================================================

window.SmartBoyAnimations = {
    staggerAnimation,
    showLoadingAnimation,
    animateHeroSection,
    fadeInImages
};
