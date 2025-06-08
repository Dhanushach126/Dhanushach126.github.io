# Formspree Setup Guide for Your Portfolio

This guide will walk you through setting up Formspree for your portfolio website to ensure your contact form works correctly.

## What is Formspree?

Formspree is a form backend service that allows you to set up an HTML form on your website without any server-side code. When someone submits your form, Formspree will forward the information to your email.

## Step 1: Create a Formspree Account

1. Go to [Formspree.io](https://formspree.io) and sign up for an account
2. Use your main email address (dhanusha621@gmail.com) to register
3. Verify your email address when prompted

## Step 2: Create a New Form

1. Log in to your Formspree account
2. Click on "New Form"
3. Give your form a name (e.g., "Portfolio Contact Form")
4. Select the "Free" plan (allows up to 50 submissions per month)
5. Click "Create Form"

## Step 3: Get Your Form Endpoint

Formspree will generate a unique form endpoint that looks like this:
```
https://formspree.io/f/mnnvpabo
```

The endpoint will be different from the example above. Copy this endpoint.

## Step 4: Update Your Website Files

Replace the current placeholder endpoint with your new endpoint in these files:

1. **contact-alt.html** (line 80):
   ```html
   <form id="contactForm" action="https://formspree.io/f/YOUR_ENDPOINT" method="POST">
   ```

2. **js/form-contact.js** (line 73):
   ```javascript
   'action': 'https://formspree.io/f/YOUR_ENDPOINT',
   ```

3. **js/contact-form.js** (line 59):
   ```javascript
   fallbackForm.action = 'https://formspree.io/f/YOUR_ENDPOINT';
   ```

## Step 5: Additional Formspree Features to Configure

After creating your form in Formspree, you can configure these settings in your Formspree dashboard:

1. **Form Settings**:
   - Set up a custom subject line
   - Configure redirect URL (your thank-you.html page)
   - Add email notifications
   - Set up auto-response emails

2. **reCAPTCHA**:
   - Enable reCAPTCHA to prevent spam (recommended)
   
3. **Email Templates**:
   - Customize how the form submissions appear in your inbox

## Step 6: Test Your Form

1. Open your website in a browser
2. Fill out and submit the contact form
3. Check your email to verify you received the submission
4. Also check your Formspree dashboard to see the submission

## Troubleshooting

If you're not receiving form submissions:

1. **Check spam folder** - Formspree emails might be filtered
2. **Verify your email** - Make sure you verified your email with Formspree
3. **Check submission limits** - Free plan allows 50 submissions/month
4. **Check form endpoint** - Make sure the endpoint is correct in all files
5. **Check browser console** - Look for JavaScript errors when submitting

## Need More Help?

- Formspree Documentation: [https://help.formspree.io/](https://help.formspree.io/)
- Contact Formspree Support: [https://help.formspree.io/hc/en-us/requests/new](https://help.formspree.io/hc/en-us/requests/new)
