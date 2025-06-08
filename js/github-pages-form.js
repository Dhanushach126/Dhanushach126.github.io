// This script automatically switches contact form submission to Formspree when hosted on GitHub Pages
document.addEventListener('DOMContentLoaded', function() {
    // Detect if site is running on GitHub Pages
    const isGitHubPages = window.location.hostname.includes('github.io');
    
    // Get the contact form
    const contactForm = document.querySelector('form[name="contactForm"]');
    
    if (contactForm && isGitHubPages) {
        // Modify form to use Formspree instead of PHP when on GitHub Pages
        contactForm.action = 'https://formspree.io/f/mnnvpabo';
        contactForm.classList.add('github-pages-form');
        
        // Add hidden fields needed for Formspree
        const nextField = document.createElement('input');
        nextField.type = 'hidden';
        nextField.name = '_next';
        nextField.value = window.location.origin + '/thank-you.html';
        contactForm.appendChild(nextField);
        
        const subjectField = document.createElement('input');
        subjectField.type = 'hidden';
        subjectField.name = '_subject';
        subjectField.value = 'New message from portfolio contact form';
        contactForm.appendChild(subjectField);
        
        // Change email field name to _replyto for Formspree
        const emailField = contactForm.querySelector('input[name="email"]');
        if (emailField) {
            emailField.setAttribute('data-original-name', 'email');
            emailField.name = '_replyto';
        }
        
        // Add a notice about GitHub Pages hosting
        const formContainer = contactForm.closest('.row');
        if (formContainer) {
            const notice = document.createElement('div');
            notice.className = 'col-md-12 text-center';
            notice.innerHTML = '<p style="margin-bottom: 20px; color: #7564e5;"><small>This site is running on GitHub Pages. Contact form submissions are handled by Formspree.</small></p>';
            formContainer.insertBefore(notice, formContainer.firstChild);
        }
        
        console.log('Contact form configured for GitHub Pages using Formspree');
    }
});
