// Form submission handling with fallback options
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('form[name="contactForm"]');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // First validate the form
            if (!validation()) {
                return false;
            }
            
            // Get form data
            const formData = new FormData(contactForm);
            
            // Create loading indicator
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.innerHTML = 'Sending...';
            submitBtn.disabled = true;
            
            // Send the form data via AJAX
            fetch('contact-handler.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
                
                if (data.status === 'success' || data.status === 'partial') {
                    // Redirect to thank you page on success or partial success
                    window.location.href = 'thank-you.html';
                } else {
                    // If server-side handling fails, try the Formspree fallback
                    tryFormspreeSubmission();
                }
            })
            .catch(error => {
                console.error('Error:', error);
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
                
                // If AJAX fails, try the Formspree fallback
                tryFormspreeSubmission();
            });
        });
    }    // Fallback function to submit via Formspree
    function tryFormspreeSubmission() {
        const formData = new FormData(contactForm);
        
        // Create a hidden form for Formspree submission
        const fallbackForm = document.createElement('form');
        fallbackForm.method = 'POST';
        fallbackForm.action = 'https://formspree.io/f/mnnvpabo';
        fallbackForm.style.display = 'none';
        
        // Add all form fields
        for (const pair of formData.entries()) {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = pair[0];
            input.value = pair[1];
            fallbackForm.appendChild(input);
        }
        
        // Add the form to the body and submit it
        document.body.appendChild(fallbackForm);
        fallbackForm.submit();
    }
});

// Original validation function - we'll keep this for compatibility
function validation() {
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var subject = document.contactForm.subject.value;
    var message = document.contactForm.message.value;
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var error = false;

    // Clear previous error messages
    document.querySelectorAll('.form-group .error').forEach(function(element) {
        element.remove();
    });

    if (name === "") {
        document.contactForm.name.insertAdjacentHTML('afterend', '<div class="error">Please enter your name</div>');
        error = true;
    }
    
    if (email === "") {
        document.contactForm.email.insertAdjacentHTML('afterend', '<div class="error">Please enter your email</div>');
        error = true;
    } else if (!emailReg.test(email)) {
        document.contactForm.email.insertAdjacentHTML('afterend', '<div class="error">Please enter a valid email</div>');
        error = true;
    }
    
    if (subject === "") {
        document.contactForm.subject.insertAdjacentHTML('afterend', '<div class="error">Please enter subject</div>');
        error = true;
    }
    
    if (message === "") {
        document.contactForm.message.insertAdjacentHTML('afterend', '<div class="error">Please enter your message</div>');
        error = true;
    }
    
    return !error;
}
