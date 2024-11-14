function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show");
}
window.addEventListener('scroll', function() { //untuk mendeteksi ketika melakukan scroll.
    const header = document.querySelector('header');
    if (window.scrollY > 50) { // Ketika scroll lebih dari 50px
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
