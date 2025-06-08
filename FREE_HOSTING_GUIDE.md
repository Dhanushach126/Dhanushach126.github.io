# Free Hosting Options for Your Portfolio Website

This guide provides detailed instructions for hosting your portfolio website for free. I've included multiple options to help you choose the best fit for your needs.

## Option 1: GitHub Pages (Static Hosting)

GitHub Pages is perfect for static websites (HTML, CSS, JavaScript). While it doesn't support PHP, you can use Formspree for the contact form.

### Steps to Deploy on GitHub Pages:

1. **Create a GitHub repository**
   - Name it `username.github.io` (replace "username" with your GitHub username)
   - For example: `Dhanushach126.github.io`

2. **Push your code to GitHub**
   ```powershell
   git remote add origin https://github.com/Dhanushach126/Dhanushach126.github.io.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings > Pages
   - Select "main" branch as source
   - Click "Save"
   - Your site will be live at `https://Dhanushach126.github.io`

4. **Contact Form**
   - Your contact form will automatically use Formspree since PHP isn't supported
   - Messages will be delivered to your email through Formspree

## Option 2: InfinityFree (PHP Support)

InfinityFree offers free hosting with PHP, MySQL, and unlimited bandwidth.

### Steps to Deploy on InfinityFree:

1. **Sign Up**
   - Go to [InfinityFree.net](https://infinityfree.net/) and create an account

2. **Create a Free Subdomain**
   - Login to your account
   - Select "New Free Hosting Account"
   - Choose a subdomain (e.g., `dhanushacharya.epizy.com`)
   - Click "Create Account"

3. **Upload Your Files**
   - In your control panel, go to "Online File Manager" or use FTP
   - Upload all your website files to the `htdocs` directory
   - Make sure `index.html` is in the root directory

4. **PHP Configuration**
   - PHP is already enabled by default
   - Your contact form should work without modifications

## Option 3: 000webhost (PHP Support)

000webhost offers free hosting with PHP 8.1, MySQL, and 1GB of storage.

### Steps to Deploy on 000webhost:

1. **Sign Up**
   - Go to [000webhost.com](https://www.000webhost.com/) and create an account

2. **Create a Website**
   - After logging in, click "Create Website"
   - Choose a name for your website
   - Select "Upload your site" option

3. **Upload Your Files**
   - Use the file manager or FTP to upload your files
   - Upload to the `public_html` directory

4. **PHP Configuration**
   - PHP is already enabled by default
   - Your contact form should work without modifications

## Option 4: Netlify (Static Hosting with Form Handling)

Netlify offers free hosting for static sites with built-in form handling.

### Steps to Deploy on Netlify:

1. **Create a GitHub Repository**
   - Push your portfolio to a GitHub repository

2. **Sign Up for Netlify**
   - Go to [Netlify.com](https://www.netlify.com/) and sign up with your GitHub account

3. **Deploy Your Site**
   - Click "New site from Git"
   - Select your GitHub repository
   - Configure build settings (usually not needed for simple sites)
   - Click "Deploy site"

4. **Enable Netlify Forms**
   - Modify your contact form to use Netlify forms by adding `data-netlify="true"` to your form tag:
   ```html
   <form name="contactForm" method="post" data-netlify="true">
   ```

## Option 5: Vercel (Modern Hosting with API Support)

Vercel offers free hosting with API routes that can handle form submissions.

### Steps to Deploy on Vercel:

1. **Create a GitHub Repository**
   - Push your portfolio to a GitHub repository

2. **Sign Up for Vercel**
   - Go to [Vercel.com](https://vercel.com/) and sign up with your GitHub account

3. **Deploy Your Site**
   - Click "Import Project"
   - Select your GitHub repository
   - Configure build settings if needed
   - Click "Deploy"

4. **API Routes for Form Handling**
   - For PHP functionality, you'd need to convert your PHP scripts to serverless functions
   - Or keep using Formspree for simplicity

## Recommended Approach

For your portfolio, I recommend this approach:

1. **Start with GitHub Pages**
   - Quick and easy to set up
   - Free custom domain support
   - Reliable and fast

2. **Use Formspree for the Contact Form**
   - Already integrated in your code
   - Works with static hosting
   - Free tier supports 50 submissions per month

3. **If You Need PHP**
   - Move to InfinityFree or 000webhost
   - Both support your PHP contact form without modifications

## Additional Tips

1. **Custom Domain**
   - All these platforms allow connecting a custom domain
   - Domain costs ~$10-15/year from providers like Namecheap or Google Domains

2. **SSL Certificates**
   - All platforms provide free SSL (https)
   - GitHub Pages, Netlify, and Vercel automatically enable SSL

3. **Performance**
   - Netlify and Vercel offer the best performance with global CDN
   - GitHub Pages is also very fast
   - Free PHP hosts may be slightly slower

If you need help setting up any of these options, feel free to reach out!
