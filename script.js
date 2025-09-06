// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(30, 30, 30, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(225, 6, 0, 0.3)';
        navbar.style.borderBottom = '2px solid var(--f1-red)';
    } else {
        navbar.style.background = 'rgba(30, 30, 30, 0.95)';
        navbar.style.boxShadow = 'none';
        navbar.style.borderBottom = '2px solid var(--f1-red)';
    }
});

// Initialize EmailJS
(function() {
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual EmailJS public key
})();

// Form submission handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const name = this.querySelector('input[name="name"]').value;
        const email = this.querySelector('input[name="email"]').value;
        const subject = this.querySelector('input[name="subject"]').value;
        const message = this.querySelector('textarea[name="message"]').value;
        
        // Basic validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Show loading state
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Prepare template parameters
        const templateParams = {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message,
            to_name: 'Yaswanth Reddy Bhuma'
        };
        
        // Send email using EmailJS
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();
            }, function(error) {
                console.log('FAILED...', error);
                alert('Sorry, there was an error sending your message. Please try again or contact me directly at byashwanth77@gmail.com');
            })
            .finally(function() {
                // Reset button state
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            });
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.skill-category, .project-card, .stat');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Typing animation for hero title
function typeWriter(element, text, speed = 100, callback = null) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else if (callback) {
            // Call the callback when typing is complete
            callback();
        }
    }
    
    type();
}

// Initialize typing animation when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    
    if (heroTitle) {
        // Start with the first greeting (English)
        const initialGreeting = greetingTranslations[0];
        console.log('Starting with initial greeting:', initialGreeting.language);
        
        // Clear and start typing animation
        heroTitle.innerHTML = '';
        typeWriter(heroTitle, initialGreeting.fullText, 60, () => {
            // After initial typing is complete, start dynamic greeting rotation
            console.log('Initial greeting typing complete, starting rotation');
            initDynamicGreeting();
        });
    }
});

// Project card hover effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Skill item hover effects
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(10px) scale(1.05)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0) scale(1)';
    });
});

// Contact form input focus effects
document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
});

// Social links hover effects
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) rotate(5deg)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotate(0deg)';
    });
});

// Button hover effects
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
        this.style.boxShadow = '0 10px 20px rgba(225, 6, 0, 0.4)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '';
    });
    
    button.addEventListener('mousedown', function() {
        this.style.transform = 'translateY(-1px)';
    });
    
    button.addEventListener('mouseup', function() {
        this.style.transform = 'translateY(-3px)';
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Scroll to top functionality
function createScrollToTop() {
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: #2563eb;
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    // Show/hide scroll to top button
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top when clicked
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize scroll to top button
createScrollToTop();

// Dynamic Greeting Display in Multiple Languages
const greetingTranslations = [
    { 
        language: "English", 
        greeting: "Hi, I'm", 
        name: "Yaswanth Reddy Bhuma",
        fullText: "Hi, I'm Yaswanth Reddy Bhuma"
    },
    { 
        language: "Spanish", 
        greeting: "Hola, soy", 
        name: "Yaswanth Reddy Bhuma",
        fullText: "Hola, soy Yaswanth Reddy Bhuma"
    },
    { 
        language: "French", 
        greeting: "Salut, je suis", 
        name: "Yaswanth Reddy Bhuma",
        fullText: "Salut, je suis Yaswanth Reddy Bhuma"
    },
    { 
        language: "German", 
        greeting: "Hallo, ich bin", 
        name: "Yaswanth Reddy Bhuma",
        fullText: "Hallo, ich bin Yaswanth Reddy Bhuma"
    },
    { 
        language: "Italian", 
        greeting: "Ciao, sono", 
        name: "Yaswanth Reddy Bhuma",
        fullText: "Ciao, sono Yaswanth Reddy Bhuma"
    },
    { 
        language: "Portuguese", 
        greeting: "Olá, eu sou", 
        name: "Yaswanth Reddy Bhuma",
        fullText: "Olá, eu sou Yaswanth Reddy Bhuma"
    },
    { 
        language: "Russian", 
        greeting: "Привет, я", 
        name: "Ясвант Редди Бхума",
        fullText: "Привет, я Ясвант Редди Бхума"
    },
    { 
        language: "Japanese", 
        greeting: "こんにちは、私は", 
        name: "ヤスワント・レディ・ブーマ",
        fullText: "こんにちは、私はヤスワント・レディ・ブーマ"
    },
    { 
        language: "Chinese", 
        greeting: "你好，我是", 
        name: "亚斯万特·雷迪·布马",
        fullText: "你好，我是亚斯万特·雷迪·布马"
    },
    { 
        language: "Arabic", 
        greeting: "مرحبا، أنا", 
        name: "ياسوانث ريدي بومة",
        fullText: "مرحبا، أنا ياسوانث ريدي بومة"
    },
    { 
        language: "Hindi", 
        greeting: "नमस्ते, मैं हूं", 
        name: "यसवंत रेड्डी भुमा",
        fullText: "नमस्ते, मैं हूं यसवंत रेड्डी भुमा"
    },
    { 
        language: "Korean", 
        greeting: "안녕하세요, 저는", 
        name: "야스완트 레디 부마",
        fullText: "안녕하세요, 저는 야스완트 레디 부마"
    }
];

let currentGreetingIndex = 0;
let isTransitioning = false;
let rotationInterval = null;

function rotateGreeting() {
    if (isTransitioning) return;
    
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) {
        console.log('Hero title element not found');
        return;
    }
    
    console.log('Rotating greeting to index:', currentGreetingIndex + 1);
    isTransitioning = true;
    
    // Move to next greeting
    currentGreetingIndex = (currentGreetingIndex + 1) % greetingTranslations.length;
    const currentTranslation = greetingTranslations[currentGreetingIndex];
    
    // Clear the title and start typing the new greeting
    heroTitle.innerHTML = '';
    typeWriter(heroTitle, currentTranslation.fullText, 80, () => {
        // After typing is complete, mark as not transitioning
        isTransitioning = false;
        console.log('Greeting rotation complete for:', currentTranslation.language);
    });
}

// Initialize dynamic greeting rotation
function initDynamicGreeting() {
    const heroTitle = document.querySelector('.hero-title');
    console.log('Initializing dynamic greeting, element found:', !!heroTitle);
    
    if (heroTitle) {
        console.log('Dynamic greeting initialized');

        // Wait 2 seconds, then start rotation
        setTimeout(() => {
            console.log('First rotation starting after 2 seconds');
            rotateGreeting();  // Do the first rotation immediately

            // Then continue rotating every 4 seconds
            rotationInterval = setInterval(rotateGreeting, 4000);
        }, 2000);

        // Manual trigger (for testing)
        window.testGreetingRotation = rotateGreeting;
    }
}


// Fallback initialization in case typing animation doesn't work
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle && !heroTitle.hasAttribute('data-initialized')) {
            console.log('Fallback: Initializing dynamic greeting');
            heroTitle.setAttribute('data-initialized', 'true');
            initDynamicGreeting();
        }
    }, 6000); // Wait 6 seconds as fallback
}); 