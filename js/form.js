/**
 * UpWith.io - Freelance Landing Page
 * Form Handling JavaScript
 */

// ============================================
// Contact Form Handler
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    if (!contactForm || !formMessage) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Validate form
        if (!validateForm(data)) {
            showFormMessage('Mohon isi semua field yang diperlukan', 'error');
            return;
        }
        
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            // In production, replace this with actual form submission
            // For example: sendFormToServer(data);
            
            // For demo purposes, we'll just show a success message
            showFormMessage('Pesan Anda telah terkirim! Saya akan segera menghubungi Anda.', 'success');
            
            // Reset form
            contactForm.reset();
            
            // Restore button state
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            // Scroll to message
            formMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
        }, 2000);
    });
    
    // Real form submission function (uncomment and configure for production)
    /*
    function sendFormToServer(data) {
        fetch('YOUR_API_ENDPOINT', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            showFormMessage('Pesan Anda telah terkirim! Saya akan segera menghubungi Anda.', 'success');
            contactForm.reset();
        })
        .catch(error => {
            console.error('Error:', error);
            showFormMessage('Terjadi kesalahan. Silakan coba lagi.', 'error');
        })
        .finally(() => {
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = '<i class="fas fa-paper-plane"></i> Kirim Pesan';
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        });
    }
    */
});

// ============================================
// Form Validation
// ============================================
function validateForm(data) {
    // Check required fields
    if (!data.name || data.name.trim() === '') {
        return false;
    }
    
    if (!data.email || data.email.trim() === '') {
        return false;
    }
    
    // Validate email format
    if (!isValidEmail(data.email)) {
        return false;
    }
    
    if (!data.subject || data.subject.trim() === '') {
        return false;
    }
    
    if (!data.message || data.message.trim() === '') {
        return false;
    }
    
    return true;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ============================================
// Form Input Validation (Real-time)
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    const inputs = form.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
        // Add real-time validation for email
        if (input.type === 'email') {
            input.addEventListener('blur', function() {
                if (this.value && !isValidEmail(this.value)) {
                    this.style.borderColor = '#FD79A8';
                    showInputError(this, 'Format email tidak valid');
                } else {
                    this.style.borderColor = '';
                    hideInputError(this);
                }
            });
            
            input.addEventListener('focus', function() {
                this.style.borderColor = '';
                hideInputError(this);
            });
        }
        
        // Add required field validation
        if (input.required) {
            input.addEventListener('blur', function() {
                if (!this.value || this.value.trim() === '') {
                    this.style.borderColor = '#FD79A8';
                    showInputError(this, 'Field ini wajib diisi');
                } else {
                    this.style.borderColor = '';
                    hideInputError(this);
                }
            });
            
            input.addEventListener('focus', function() {
                this.style.borderColor = '';
                hideInputError(this);
            });
        }
    });
});

function showInputError(input, message) {
    // Remove existing error
    hideInputError(input);
    
    // Create error element
    const error = document.createElement('span');
    error.className = 'input-error';
    error.textContent = message;
    error.style.cssText = 'color: #FD79A8; font-size: 12px; margin-top: 4px; display: block;';
    
    // Insert after input
    input.parentNode.insertBefore(error, input.nextSibling);
}

function hideInputError(input) {
    const error = input.parentNode.querySelector('.input-error');
    if (error) {
        error.remove();
    }
}

// ============================================
// Form Message Display
// ============================================
function showFormMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    if (!formMessage) return;
    
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    
    // Auto hide after 5 seconds if success
    if (type === 'success') {
        setTimeout(() => {
            formMessage.classList.remove('success');
            formMessage.style.display = 'none';
        }, 5000);
    }
}

// ============================================
// Phone Input Formatting
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('phone');
    if (!phoneInput) return;
    
    phoneInput.addEventListener('input', function(e) {
        // Remove non-numeric characters
        let value = this.value.replace(/\D/g, '');
        
        // Format Indonesian phone number
        if (value.startsWith('0')) {
            value = '62' + value.substring(1);
        }
        
        // Add spaces for better readability
        if (value.length > 4 && value.length <= 7) {
            value = value.substring(0, 4) + ' ' + value.substring(4);
        } else if (value.length > 7) {
            value = value.substring(0, 4) + ' ' + value.substring(4, 8) + ' ' + value.substring(8);
        }
        
        this.value = value;
    });
});

// ============================================
// Character Counter for Message
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const messageInput = document.getElementById('message');
    if (!messageInput) return;
    
    const maxLength = 1000;
    const counter = document.createElement('div');
    counter.className = 'char-counter';
    counter.style.cssText = 'text-align: right; font-size: 12px; color: #6C757D; margin-top: 4px;';
    
    messageInput.parentNode.insertBefore(counter, messageInput.nextSibling);
    
    messageInput.addEventListener('input', function() {
        const currentLength = this.value.length;
        const remaining = maxLength - currentLength;
        
        counter.textContent = `${remaining} karakter tersisa`;
        
        if (remaining < 50) {
            counter.style.color = '#FD79A8';
        } else {
            counter.style.color = '#6C757D';
        }
    });
    
    // Trigger initial count
    messageInput.dispatchEvent(new Event('input'));
});

// ============================================
// Form Auto-Save (for long forms)
// ============================================
let formAutoSaveTimeout;

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    const inputs = contactForm.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            clearTimeout(formAutoSaveTimeout);
            formAutoSaveTimeout = setTimeout(() => {
                saveFormData(contactForm);
            }, 1000);
        });
    });
    
    // Load saved data
    loadFormData(contactForm);
});

function saveFormData(form) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Save to localStorage
    localStorage.setItem('upwithContactFormData', JSON.stringify(data));
}

function loadFormData(form) {
    const savedData = localStorage.getItem('upwithContactFormData');
    if (!savedData) return;
    
    try {
        const data = JSON.parse(savedData);
        
        // Populate form fields
        for (const [key, value] of Object.entries(data)) {
            const input = form.querySelector(`[name="${key}"]`);
            if (input && value) {
                if (input.type === 'checkbox' || input.type === 'radio') {
                    input.checked = input.value === value;
                } else {
                    input.value = value;
                }
            }
        }
    } catch (e) {
        console.error('Error loading form data:', e);
    }
}

// Clear saved form data on successful submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    contactForm.addEventListener('reset', function() {
        localStorage.removeItem('upwithContactFormData');
    });
});

// ============================================
// Email Validation Enhancement
// ============================================
function isValidEmailEnhanced(email) {
    // More comprehensive email validation
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(email);
}

// ============================================
// Phone Validation
// ============================================
function isValidPhone(phone) {
    // Remove all non-digit characters
    const digits = phone.replace(/\D/g, '');
    
    // Check if it's a valid Indonesian phone number
    // Should be 10-15 digits, possibly starting with 62 or 0
    if (digits.length < 10 || digits.length > 15) {
        return false;
    }
    
    // Check if starts with 62 (country code) or 0
    if (!digits.startsWith('62') && !digits.startsWith('0')) {
        return false;
    }
    
    return true;
}

// ============================================
// Export Functions for Testing
// ============================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        validateForm,
        isValidEmail,
        isValidEmailEnhanced,
        isValidPhone
    };
}
