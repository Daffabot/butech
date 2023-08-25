//Script untuk hamburger navbar
document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.querySelector(".menu-toggle");
  const matikanElems = document.querySelectorAll(".matikan");
  const nav = document.querySelector(".nav");

  menuToggle.addEventListener("click", function() {
    matikanElems.forEach(function(elem) {
      if (elem.classList.contains("aktifkan")) {
        elem.classList.remove("aktifkan");
        elem.classList.add("matikan");
      } else {
        elem.classList.remove("matikan");
        elem.classList.add("aktifkan");
      }
    });

    nav.classList.toggle("aktifkan");
    nav.classList.toggle("matikan");
  });
});

function toggleNavbar() {
  const navbarToggle = document.querySelector('.menu-toggle');
    navbarToggle.classList.toggle('active');
}