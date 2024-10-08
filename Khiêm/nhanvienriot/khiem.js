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
