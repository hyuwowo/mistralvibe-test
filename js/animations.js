/**
 * UpWith.io - Freelance Landing Page
 * Animation JavaScript File
 */

// ============================================
// Initialize All Animations
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    initParallaxEffect();
    initHoverEffects();
    initTypingEffect();
    initSkillBars();
    initFloatingElements();
    initScrollReveal();
    initMouseMoveEffects();
});

// ============================================
// Parallax Effect
// ============================================
function initParallaxEffect() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const heroBg = hero.querySelector('.hero-bg');
    const shapes = hero.querySelectorAll('.hero-bg-shape');
    
    if (!heroBg || !shapes.length) return;
    
    window.addEventListener('scroll', throttle(function() {
        const scrollPosition = window.scrollY;
        const heroHeight = hero.offsetHeight;
        
        // Only apply parallax when hero is in view
        if (scrollPosition < heroHeight) {
            const parallaxValue = scrollPosition * 0.3;
            
            shapes.forEach((shape, index) => {
                const speed = 0.1 + (index * 0.05);
                const moveValue = parallaxValue * speed;
                
                if (index === 0) {
                    // Shape 1 - top right
                    shape.style.transform = `translate(${moveValue * 0.5}px, -${moveValue}px)`;
                } else if (index === 1) {
                    // Shape 2 - bottom left
                    shape.style.transform = `translate(-${moveValue * 0.5}px, ${moveValue}px)`;
                } else {
                    // Shape 3 - center
                    shape.style.transform = `translate(-${moveValue * 0.3}px, ${moveValue * 0.3}px)`;
                }
            });
        }
    }, 16));
}

// ============================================
// Hover Effects
// ============================================
function initHoverEffects() {
    // Service card hover effect
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
    
    // Portfolio item hover effect
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        const image = item.querySelector('.portfolio-image img');
        
        item.addEventListener('mouseenter', function() {
            if (image) {
                image.style.transform = 'scale(1.1)';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            if (image) {
                image.style.transform = '';
            }
        });
    });
    
    // Testimonial card hover effect
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
            this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
    
    // Pricing card hover effect
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (!this.classList.contains('featured')) {
                this.style.transform = 'translateY(-6px)';
                this.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.12)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('featured')) {
                this.style.transform = '';
                this.style.boxShadow = '';
            }
        });
    });
    
    // Blog card hover effect
    const blogCards = document.querySelectorAll('.blog-card');
    blogCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const image = this.querySelector('.blog-image img');
            if (image) {
                image.style.transform = 'scale(1.05)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const image = this.querySelector('.blog-image img');
            if (image) {
                image.style.transform = '';
            }
        });
    });
    
    // Button hover effect
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 6px 16px rgba(108, 92, 231, 0.3)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
    
    // Info card hover effect
    const infoCards = document.querySelectorAll('.info-card');
    infoCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(6px)';
            this.style.boxShadow = '0 6px 16px rgba(108, 92, 231, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
}

// ============================================
// Typing Effect
// ============================================
function initTypingEffect() {
    const heroTitle = document.querySelector('.hero-title .highlight');
    if (!heroTitle) return;
    
    const text = heroTitle.textContent;
    const words = ['Bersama Saya', 'Dengan Profesional', 'Untuk Kesuksesan Anda'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            heroTitle.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            heroTitle.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500;
        }
        
        setTimeout(type, typeSpeed);
    }
    
    // Start typing effect after a delay
    setTimeout(() => {
        type();
    }, 2000);
}

// ============================================
// Skill Bars Animation
// ============================================
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    if (!skillBars.length) return;
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBar(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    skillBars.forEach(bar => {
        // Reset width to 0 initially
        bar.style.width = '0%';
        observer.observe(bar);
    });
}

function animateSkillBar(bar) {
    const width = bar.style.width || bar.getAttribute('style')?.match(/width:\s*(\d+%)/)?.[1] || '0%';
    const targetWidth = bar.style.width || bar.parentElement.style.width || '90%';
    
    // Get the actual width from the inline style
    const style = bar.parentElement.querySelector('.skill-progress').style;
    const computedWidth = style.width || bar.getAttribute('style')?.match(/width:\s*(\d+%)/)?.[1];
    
    // Find the actual width from the HTML
    const skillItem = bar.closest('.skill-item');
    if (skillItem) {
        const progressBar = skillItem.querySelector('.skill-progress');
        if (progressBar) {
            const width = progressBar.style.width;
            if (width) {
                animateToWidth(bar, width);
            }
        }
    }
}

function animateToWidth(element, width) {
    let currentWidth = 0;
    const targetWidth = parseInt(width);
    const duration = 1500;
    const step = targetWidth / (duration / 16);
    
    const timer = setInterval(() => {
        currentWidth += step;
        if (currentWidth >= targetWidth) {
            element.style.width = width;
            clearInterval(timer);
        } else {
            element.style.width = `${Math.floor(currentWidth)}%`;
        }
    }, 16);
}

// ============================================
// Floating Elements Animation
// ============================================
function initFloatingElements() {
    const floatingElements = document.querySelectorAll('.float-element');
    
    if (!floatingElements.length) return;
    
    floatingElements.forEach((element, index) => {
        const delay = index * 500;
        const duration = 6000 + (index * 1000);
        
        setTimeout(() => {
            animateFloat(element, duration);
        }, delay);
    });
}

function animateFloat(element, duration) {
    const startY = 0;
    const endY = -20;
    const startX = 0;
    const endX = Math.random() > 0.5 ? 10 : -10;
    
    let currentTime = 0;
    
    function updatePosition(timestamp) {
        if (!currentTime) currentTime = timestamp;
        const elapsed = timestamp - currentTime;
        const progress = (elapsed % duration) / duration;
        
        const y = startY + (endY - startY) * Math.sin(progress * Math.PI * 2);
        const x = startX + (endX - startX) * Math.sin(progress * Math.PI);
        
        element.style.transform = `translate(${x}px, ${y}px)`;
        
        requestAnimationFrame(updatePosition);
    }
    
    requestAnimationFrame(updatePosition);
}

// ============================================
// Scroll Reveal Animation
// ============================================
function initScrollReveal() {
    const revealElements = document.querySelectorAll(
        '.section-header, .service-card, .portfolio-item, .testimonial-card, .pricing-card, .faq-item, .blog-card, .about-content, .about-image, .contact-info, .contact-form'
    );
    
    if (!revealElements.length) return;
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                
                // Add staggered animation
                const index = Array.from(revealElements).indexOf(entry.target);
                entry.target.style.animationDelay = `${index * 100}ms`;
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    revealElements.forEach(el => {
        el.classList.add('reveal-item');
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Add CSS for reveal animation
    addRevealStyles();
}

function addRevealStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .reveal-item {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .reveal-visible {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
}

// ============================================
// Mouse Move Effects
// ============================================
function initMouseMoveEffects() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const heroImage = hero.querySelector('.hero-image .main-image');
    if (!heroImage) return;
    
    hero.addEventListener('mousemove', throttle(function(e) {
        const rect = hero.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const moveX = (x - centerX) / 50;
        const moveY = (y - centerY) / 50;
        
        heroImage.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }, 16));
    
    hero.addEventListener('mouseleave', function() {
        heroImage.style.transform = 'translate(0, 0)';
    });
}

// ============================================
// GSAP Animations (Optional - if GSAP is loaded)
// ============================================
function initGSAPAnimations() {
    if (typeof gsap === 'undefined') return;
    
    // Hero animation
    gsap.from('.hero-content', {
        duration: 1,
        x: -50,
        opacity: 0,
        ease: 'power3.out'
    });
    
    gsap.from('.hero-image', {
        duration: 1,
        x: 50,
        opacity: 0,
        ease: 'power3.out'
    });
    
    // Stats counter animation
    gsap.to('.stat-number', {
        duration: 2,
        textContent: 50,
        snap: { textContent: 1 },
        stagger: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.hero-stats',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });
}

// Check if GSAP is loaded and initialize
if (typeof gsap !== 'undefined') {
    document.addEventListener('DOMContentLoaded', initGSAPAnimations);
}

// ============================================
// AOS (Animate On Scroll) Integration
// ============================================
function initAOS() {
    if (typeof AOS === 'undefined') return;
    
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
}

// Check if AOS is loaded and initialize
if (typeof AOS !== 'undefined') {
    document.addEventListener('DOMContentLoaded', initAOS);
}

// ============================================
// Utility Functions
// ============================================

// Throttle function
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ============================================
// Console Log
// ============================================
console.log('%c Animations Loaded ', 'background: #6C5CE7; color: #fff; font-size: 14px; padding: 8px;');
