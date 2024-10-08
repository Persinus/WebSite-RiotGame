// Thêm sự kiện click vào hamburger để toggle menu
document.getElementById('menu-toggle').addEventListener('click', function() {
    var mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('active');
});
