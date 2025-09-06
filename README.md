# Personal Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Perfect for showcasing your skills, projects, and professional information.

## Features

- 🎨 Modern, clean design with smooth animations
- 📱 Fully responsive - works on all devices
- ⚡ Fast loading with optimized code
- 🎯 SEO-friendly structure
- 📧 Contact form with validation
- 🔗 Social media integration
- 📊 Skills and projects showcase
- 🎭 Smooth scrolling and hover effects

## Sections Included

1. **Hero Section** - Introduction and call-to-action
2. **About Section** - Personal information and statistics
3. **Skills Section** - Technical skills and technologies
4. **Projects Section** - Featured projects with descriptions
5. **Contact Section** - Contact form and information
6. **Footer** - Copyright and additional links

## How to Customize

### 1. Personal Information

Edit the following in `index.html`:

```html
<!-- Replace "Your Name" with your actual name -->
<title>Your Name - Portfolio</title>
<a href="#home">Your Name</a>
<h1 class="hero-title">Hi, I'm <span class="highlight">Your Name</span></h1>

<!-- Update your role/title -->
<p class="hero-subtitle">Software Developer | Web Designer | Problem Solver</p>

<!-- Update your description -->
<p class="hero-description">
    I create innovative digital solutions and bring ideas to life through code. 
    Passionate about building user-friendly applications and learning new technologies.
</p>
```

### 2. About Section

Update the about section with your personal information:

```html
<p>
    I'm a passionate software developer with a strong foundation in modern web technologies. 
    I enjoy solving complex problems and creating elegant, user-friendly applications.
</p>

<!-- Update statistics -->
<div class="stat">
    <h3>2+</h3>
    <p>Years Experience</p>
</div>
```

### 3. Skills Section

Modify the skills to match your expertise:

```html
<!-- Frontend Skills -->
<div class="skill-item">
    <i class="fab fa-html5"></i>
    <span>HTML5</span>
</div>

<!-- Backend Skills -->
<div class="skill-item">
    <i class="fab fa-node-js"></i>
    <span>Node.js</span>
</div>
```

### 4. Projects Section

Replace the sample projects with your actual projects:

```html
<div class="project-card">
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Description of your project and what it does.</p>
        <div class="project-tech">
            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
        </div>
        <div class="project-links">
            <a href="your-github-link" class="project-link">
                <i class="fab fa-github"></i> Code
            </a>
            <a href="your-live-link" class="project-link">
                <i class="fas fa-external-link-alt"></i> Live
            </a>
        </div>
    </div>
</div>
```

### 5. Contact Information

Update your contact details:

```html
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <span>your.email@example.com</span>
</div>
<div class="contact-item">
    <i class="fas fa-phone"></i>
    <span>+1 (555) 123-4567</span>
</div>
<div class="contact-item">
    <i class="fas fa-map-marker-alt"></i>
    <span>Your City, State</span>
</div>
```

### 6. Social Media Links

Update your social media profiles:

```html
<div class="social-links">
    <a href="your-github-url" class="social-link">
        <i class="fab fa-github"></i>
    </a>
    <a href="your-linkedin-url" class="social-link">
        <i class="fab fa-linkedin"></i>
    </a>
    <a href="your-twitter-url" class="social-link">
        <i class="fab fa-twitter"></i>
    </a>
</div>
```

## Customization Tips

### Colors
The main color scheme uses blue (`#2563eb`) and yellow (`#fbbf24`). You can change these in `styles.css`:

```css
/* Primary blue color */
color: #2563eb;

/* Accent yellow color */
background: #fbbf24;
```

### Fonts
The portfolio uses Inter font from Google Fonts. You can change this by:
1. Replacing the Google Fonts link in the HTML
2. Updating the font-family in CSS

### Images
Replace the placeholder icons with your actual images:
- Profile photo in the hero section
- Project screenshots
- About section image

## Deployment Options

### 1. GitHub Pages (Free)
1. Create a GitHub repository
2. Upload your portfolio files
3. Go to Settings > Pages
4. Select source branch (usually main)
5. Your site will be available at `https://username.github.io/repository-name`

### 2. Netlify (Free)
1. Drag and drop your portfolio folder to Netlify
2. Get a custom URL instantly
3. Connect your GitHub for automatic deployments

### 3. Vercel (Free)
1. Install Vercel CLI
2. Run `vercel` in your portfolio directory
3. Follow the prompts

### 4. Traditional Web Hosting
Upload files to any web hosting service via FTP or file manager.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Optimization

The portfolio is optimized for:
- Fast loading times
- Mobile responsiveness
- SEO best practices
- Accessibility standards

## File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
└── README.md          # This file
```

## Support

If you need help customizing your portfolio:
1. Check the comments in the code
2. Refer to this README
3. Look up HTML/CSS/JavaScript documentation

## License

This portfolio template is free to use for personal and commercial projects.

---

**Happy coding! 🚀** 