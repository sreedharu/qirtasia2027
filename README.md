# QIRT ASIA 2027 Conference Website

Official website for the 5th Asian Quantitative Infrared Thermography Conference (QIRT ASIA 2027), to be held March 9-12, 2027 in Singapore.

## Conference Information

- **Dates:** March 9-12, 2027
- **Venue:** Singapore (Venue TBC)
- **Registration Fee:** $700 USD
- **Website:** www.qirtasia2027.org (to be configured)

## Important Dates

- **Abstract Submission:** November 15, 2026
- **Early-Bird Registration:** January 31, 2027
- **Paper Submission:** February 15, 2027
- **Conference:** March 9-12, 2027

## Organizing Committee

- **Sreedhar U** - General Chair
- **Andrew Ngo** - Co-Chair
- **Jonathan** - Technical Program Chair
- **Vinod** - Committee Member
- **Andy Malcolm** - Committee Member
- **Babu** - Committee Member

## Keynote Speaker

- **Prof. Xavier Maldague** - Distinguished expert in infrared thermography

## Sponsors

- ALX (Platinum Sponsor)
- FLIR (Gold Sponsor)
- INFRATEC (Silver Sponsor)

## Website Structure

```
qirtasia2027/
├── index.html                 # Home page
├── css/
│   ├── main.css              # Main stylesheet
│   └── responsive.css        # Responsive design
├── js/
│   └── main.js               # JavaScript functionality
├── images/
│   ├── hero/                 # Hero section images
│   ├── singapore/            # Singapore attractions
│   ├── logos/                # Conference and sponsor logos
│   └── speakers/             # Keynote speaker photos
├── pages/
│   ├── general-info/
│   │   ├── about.html
│   │   ├── committee.html
│   │   ├── contacts.html
│   │   ├── news.html
│   │   └── organizer.html
│   ├── sessions/
│   │   ├── topics.html
│   │   ├── keynote.html
│   │   └── venue.html
│   ├── submission/
│   │   ├── guidelines.html
│   │   └── upload.html
│   ├── registration/
│   │   ├── register.html
│   │   ├── fees.html
│   │   └── faq.html
│   ├── local-info/
│   │   ├── accommodation.html
│   │   ├── attractions.html
│   │   └── dining.html
│   └── sponsors.html
└── downloads/
    ├── abstract-template.docx
    ├── paper-template.docx
    └── flyer.pdf
```

## Features

- **Modern Design:** Singapore-themed colors with professional aesthetics
- **Responsive:** Works on desktop, tablet, and mobile devices
- **Interactive:** Countdown timer, smooth scrolling, form validation
- **SEO Optimized:** Proper meta tags and semantic HTML
- **Fast Loading:** Optimized images and minified code

## Local Development

### Option 1: Python HTTP Server

```bash
# Navigate to the project directory
cd c:\repos\qirtasia2027

# Start a local server (Python 3)
python -m http.server 8000

# Open your browser to:
# http://localhost:8000
```

### Option 2: Node.js HTTP Server

```bash
# Install http-server globally (one time only)
npm install -g http-server

# Navigate to the project directory
cd c:\repos\qirtasia2027

# Start the server
http-server -p 8000

# Open your browser to:
# http://localhost:8000
```

### Option 3: VS Code Live Server

1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## Deployment

### GitHub Pages (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial QIRT ASIA 2027 website"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click "Settings" → "Pages"
   - Under "Source", select "main" branch
   - Click "Save"
   - Your site will be available at: `https://[username].github.io/qirtasia2027`

3. **Custom Domain Configuration (Namecheap):**
   - The `CNAME` file has been created in this repository with `qirtasia2027.com`.
   - **Login to Namecheap** and go to the "Advanced DNS" tab for your domain.
   - **Add the following records:**
     - **Type:** A Record | **Host:** @ | **Value:** 185.199.108.153
     - **Type:** A Record | **Host:** @ | **Value:** 185.199.109.153
     - **Type:** A Record | **Host:** @ | **Value:** 185.199.110.153
     - **Type:** A Record | **Host:** @ | **Value:** 185.199.111.153
     - **Type:** CNAME Record | **Host:** www | **Value:** <your-github-username>.github.io
   - Wait for DNS propagation (can take up to 24 hours).
   - In GitHub repository settings -> Pages, check "Enforce HTTPS".

### Traditional Web Hosting

1. **Upload Files:**
   - Use FTP/SFTP to upload all files to your web server
   - Ensure the directory structure is maintained

2. **Configure Domain:**
   - Point your domain to the web server
   - Set up SSL certificate for HTTPS

3. **Test:**
   - Visit your domain to verify the site is working
   - Test all links and forms

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with custom properties
- **JavaScript (ES6+)** - Interactive features
- **Font Awesome** - Icons
- **Google Fonts** - Typography (Inter, Roboto)

## Customization

### Update Conference Information

Edit `index.html` and update the relevant sections:
- Dates and venue
- Committee members
- Sponsors
- Keynote speakers

### Change Colors

Edit `css/main.css` and modify the CSS variables:
```css
:root {
  --primary-red: #ED2939;
  --accent-gold: #FFD700;
  /* Add more custom colors */
}
```

### Add New Pages

1. Create a new HTML file in the appropriate `pages/` subdirectory
2. Copy the structure from an existing page
3. Update the navigation links in the header
4. Add the page to the footer links

## Contact

For questions or issues with the website:

- **Sreedhar U** - sreedhar@qirtasia2027.org
- **Andrew Ngo** - andrew@qirtasia2027.org

## License

© 2027 QIRT ASIA. All rights reserved.

## Acknowledgments

- QIRT Conference Series - www.qirt.org
- Previous QIRT ASIA conferences
- All sponsors and supporters
