$('.slider-banner').slick({
    fade: true,
});


document.querySelector(".menu-btn").addEventListener("click", toggleNavbar);
function toggleNavbar() {
    // alert(1)
    document.querySelector(".main-menux").classList.toggle("show");
}
