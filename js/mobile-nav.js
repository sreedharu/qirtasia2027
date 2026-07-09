document.addEventListener('DOMContentLoaded', () => {
  const topbarInner = document.querySelector('.topbar-inner');
  const nav = document.querySelector('.nav');
  if (topbarInner && nav) {
    // Create mobile menu toggle button
    const btn = document.createElement('button');
    btn.className = 'mobile-menu-toggle';
    btn.setAttribute('aria-label', 'Toggle menu');
    btn.innerHTML = '<i class="fas fa-bars"></i>';
    
    // Insert before top-cta or append at the end
    const cta = topbarInner.querySelector('.top-cta');
    if (cta) {
      topbarInner.insertBefore(btn, cta);
    } else {
      topbarInner.appendChild(btn);
    }
    
    // Toggle menu state on click
    btn.addEventListener('click', () => {
      const topbar = document.querySelector('.topbar');
      if (topbar) {
        topbar.classList.toggle('menu-open');
      }
    });

    // Close menu when clicking navigation links (especially for hash anchors on homepage)
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        const topbar = document.querySelector('.topbar');
        if (topbar) {
          topbar.classList.remove('menu-open');
        }
      });
    });
  }
});
