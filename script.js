// Change navbar background color on scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Add smooth scroll behavior to navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add hover effects to navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseover', function () {
        this.style.color = '#f9f8f8';
    }); 
    link.addEventListener('mouseout', function () {
        this.style.color = '#fff';
    });
});
