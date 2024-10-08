function openLink(url) {
    if (url && typeof url === 'string') {
        window.location.href = url;
    } else {
        console.error('Invalid URL:', url);
    }
}



document.querySelectorAll('.news-item a').forEach(item => {
    item.addEventListener('click', function(event) {
        if (this.href) {
            console.log('Navigating to:', this.href);
        } else {
            console.error('Link not found');
        }
    });
});



// Script to smoothly scroll to the top when clicking "Tới đầu trang"
document.querySelector('.scroll-top').addEventListener('click', function(e) {
    e.preventDefault();
    if (window.scrollY > 0) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
});



// Script to toggle menu on mobile
function toggleMenu() {
    const menu = document.querySelector('.navbar-menu');
    menu.classList.toggle('active');
}
