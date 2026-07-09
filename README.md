# QIRT ASIA 2027 Conference Website

Official website for the 6th Asian Quantitative Infrared Thermography Conference (QIRT ASIA 2027), to be held March 7-10, 2027 in Singapore.

## Conference Information

- **Dates:** March 7-10, 2027
- **Venue:** Marina Bay Sands (Sands Expo & Convention Centre, Level 4), Singapore
- **Registration Fee:** Regular from USD 650 (early bird) / Student from USD 450 (early bird) — see `pages/register.html` for the full tiered pricing
- **Organiser:** Nondestructive Testing Society of Singapore (NDTSS)
- **Supporter:** Institute of Materials Research and Engineering, A*STAR (A*STAR IMRE)
- **Co-located with:** SINCE 2027 conference and exhibition
- **Website:** qirtasia2027.com

## Important Dates

- **Abstract Submission Opens:** 1 June 2026
- **Registration Opens:** 1 July 2026
- **Abstract Submission Deadline:** 15 October 2026
- **Notification of Acceptance:** 25 November 2026
- **Early-Bird Registration Deadline:** 15 December 2026
- **Full Paper / Extended Abstract Due:** 10 January 2027
- **Standard Registration Deadline:** 15 February 2027
- **QIRT Short Course:** 7 March 2027
- **Main Conference:** 8-9 March 2027
- **Post-Conference Tour:** 10 March 2027

## Organizing Committee

**Local Organizing Committee** — see `pages/committee.html` for full affiliations:

- **Dr. Andrew Ngo** - Chair (A*STAR IMRE / A*STAR FEAT)
- **Dr. Sreedhar Unnikrishnakurup** - Co-Chair (A*STAR IMRE / A*STAR FEAT)
- **Prof. Junyan Liu** - Vice Chair (Harbin Institute of Technology)
- **Prof. Edmund Liew** - Committee Member (Singapore Institute of Technology)
- **Vinod Kumar** - Logistics Committee (A*STAR IMRE)
- **Jonathan Zheng** - Technical Committee (A*STAR IMRE)
- **Dr. Andy Malcolm** - Committee Member (A*STAR SIMTECH)
- **Dr. Sajeesh K Babu** - President NDTSS, ICNDT Chairman

The QIRT Asia Steering Committee (19 members across 10 countries) is listed in full on `pages/committee.html`.

## Keynote Speaker

- **Prof. Xavier Maldague** - Université Laval, Canada Research Chair in Multipolar Infrared Vision; also QIRT Council Representative

## Awards

- **Best Young Researcher Presentation Award** - for the most impactful presentation by a researcher within 10 years of completing their PhD
- **Best Student Paper Award** - for the best paper with a student as primary and presenting author

## Website Structure

```
qirtasia2027/
├── index.html                 # Home page
├── styles.css                 # Shared stylesheet (design tokens, layout, components)
├── js/
│   └── mobile-nav.js          # Mobile menu toggle + scroll-reveal engine, shared across pages
├── images/
│   ├── hero/                  # Hero section images and video
│   ├── logos/                 # Conference, host and supporter logos
│   ├── committee/              # Committee member photos
│   └── speakers/               # Keynote speaker photos
├── pages/
│   ├── committee.html
│   ├── contacts.html
│   ├── keynote.html
│   ├── news.html
│   ├── register.html
│   ├── submission.html
│   └── venue.html
├── downloads/
│   └── QIRTAsia2027_ExtendedAbstract_Template.docx
├── archive/old-design/        # Retired previous design, kept for reference
└── _headers                   # Security headers for Cloudflare Pages / Netlify deployment
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

Edit `styles.css` and modify the CSS custom properties:
```css
:root {
  --paper: #FAF7F2;
  --ink: #111111;
  --accent: #C2410C;
  /* thermal-gradient tokens (--thermal-1 through --thermal-6) drive the
     signature accent gradient used across nav, buttons and hover states */
}
```

### Add New Pages

1. Create a new HTML file in `pages/`
2. Copy the structure from an existing page (topbar, nav, footer)
3. Add the new page to the nav dropdown/links in every page's `<nav class="nav">` block
4. Add the page to the footer links in `index.html`

## Contact

For questions or issues with the website:

- **info@qirtasia2027.com**

## License

© 2026 QIRT Asia. All rights reserved.

## Acknowledgments

- QIRT Conference Series - www.qirt.org
- Previous QIRT ASIA conferences
- All sponsors and supporters
