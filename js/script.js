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
    
//Script For Up To Scroll
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}