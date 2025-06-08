# Dhanush Acharya Portfolio Website

A responsive personal portfolio website showcasing Dhanush Acharya's skills, projects, and contact information.

## Table of Contents
- [About the Website](#about-the-website)
- [Features](#features)
- [Contact Form Setup](#contact-form-setup)
- [Customization](#customization)
- [Server Requirements](#server-requirements)
- [Troubleshooting](#troubleshooting)
- [Contact](#contact)

## About the Website
This portfolio website is designed to showcase Dhanush Acharya's professional skills, experience, and projects. It includes sections for personal information, services offered, portfolio items, testimonials, and contact options.

## Features
- Fully responsive design
- Modern and clean UI
- Downloadable CV
- Portfolio gallery with project showcase
- Social media integration
- Contact form with multiple fallback options
- Testimonials section
- Skills and experience visualization

## Contact Form Setup

The website includes multiple contact form solutions to ensure it works across different hosting environments:

### Primary PHP Contact Form (contact-handler.php)
This is the default form that uses PHP mail() function:

1. **Server Requirements**:
   - PHP 5.6 or higher
   - mail() function enabled on the server
   - Proper server configuration for sending emails

2. **Configuration**:
   - Edit `contact-handler.php` and update the following line:
     ```php
     $to = 'dhanusha621@gmail.com'; // Change to your email
     ```

3. **How it works**:
   - Uses PHP's mail() function to send emails
   - Includes fallback to save messages to a text file
   - Uses AJAX for submission without page reload
   - Redirects to thank-you.html on success

### Formspree Fallback (Automatic)
If the PHP solution fails, the form automatically falls back to Formspree:

1. **How it works**:
   - Creates a hidden form and submits to Formspree
   - Redirects to thank-you.html after submission
   - No server configuration required

2. **Configuration**:
   - Sign up for a free account at [Formspree.io](https://formspree.io)
   - Create a new form and get your unique endpoint
   - Edit `js/form-contact.js` and update:
     ```javascript
     'action': 'https://formspree.io/f/mnnvpabo'
     ```
   - Replace with your own Formspree endpoint (see FORMSPREE_SETUP.md for detailed instructions)

### Alternative Contact Form (contact-alt.html)
A standalone page using Formspree exclusively:

1. **How to use**:
   - Link to `contact-alt.html` from your main page
   - Or use it as a direct replacement if PHP form doesn't work

2. **Configuration**:
   - Edit the form action in `contact-alt.html`:
     ```html
     action="https://formspree.io/f/mnnvpabo"
     ```
   - Replace with your own Formspree endpoint
   - For detailed setup instructions, see the FORMSPREE_SETUP.md file

## Server Requirements
- Web server (Apache, Nginx, etc.)
- PHP 5.6 or higher (for contact form)
- Properly configured mail server (for PHP contact form)

## Troubleshooting

### Contact Form Not Working
1. **Check server logs**:
   - Look for errors in `logs/contact_form_*.log`
   - Check server error logs

2. **PHP mail() function disabled**:
   - Use the alternative contact form at `contact-alt.html`
   - Or configure server to enable mail() function

3. **Formspree not working**:
   - Verify your Formspree endpoint
   - Check if you've confirmed your email with Formspree
   - Try using a different email service

### Message Backup
All messages are automatically saved to `messages.txt` as a backup in case email sending fails.

## Contact
Dhanush Acharya - dhanusha621@gmail.com

Social Media:
- [Facebook](https://www.facebook.com/dhanushacharya.dhanu.9/)
- [Twitter](https://twitter.com/DhanushAcharya)
- [LinkedIn](https://www.linkedin.com/in/dhanush-acharya-977543326/)
- [Instagram](https://www.instagram.com/dhanush_acharya/)
- [GitHub](https://github.com/Dhanushach126)

Project Link: https://github.com/dhanush/parax

"# Dhanush_Portfolio" 
"# Dhanush_Portfolio" 
"# Dhanush_Portfolio" 
