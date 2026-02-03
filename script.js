// Simple page transition
function showPage(pageId) {
    // Get all pages
    const pages = document.querySelectorAll('.page');
    
    // Remove active class from all pages
    pages.forEach(page => page.classList.remove('active'));
    
    // Add active class to target page
    const target = document.getElementById(pageId);
    if (target) {
        target.classList.add('active');
        
        // Update overflow
        if (pageId === 'home-page') {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }
}

// Wait for page to load
window.addEventListener('load', function() {
    // Handle clicks on navigation links
    document.body.addEventListener('click', function(e) {
        const link = e.target.closest('a[data-page]');
        if (link) {
            e.preventDefault();
            const page = link.getAttribute('data-page') + '-page';
            showPage(page);
        }
    });
    
    // Prevent scrolling on home page
    function preventScroll(e) {
        if (document.getElementById('home-page').classList.contains('active')) {
            e.preventDefault();
        }
    }
    
    document.addEventListener('wheel', preventScroll, { passive: false });
    document.addEventListener('touchmove', preventScroll, { passive: false });
});
