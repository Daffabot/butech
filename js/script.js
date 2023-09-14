//Script to preload image
function preloadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;
    img.onload = resolve;
    img.onerror = reject;
  });
}

window.onload = () => {
  preloadImage("../image/aset-1.webp", "../image/aset-2.webp", "../image/chatbot.webp", "../image/cloud.webp", "../image/Curtain-left.webp", "../image/Curtain-right.webp", "../image/kipas.webp", "../image/logo.webp")
    .then(() => {
      console.log("Gambar berhasil dimuat pertama");
    })
    .catch((error) => {
      console.error("Gagal memuat gambar:", error);
    });
};

//Script untuk hamburger navbar
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const matikanElems = document.querySelectorAll(".matikan");
  const nav = document.querySelector(".nav");

  menuToggle.addEventListener("click", function () {
    matikanElems.forEach(function (elem) {
      if (elem.classList.contains("aktifkan")) {
        elem.classList.remove("aktifkan");
        elem.classList.add("matikan");
      } else {
        elem.classList.remove("matikan");
        elem.classList.add("aktifkan");
      }
    });
  });
});

function toggleNavbar() {
  const navbarToggle = document.querySelector(".menu-toggle");
  navbarToggle.classList.toggle("active");
}

//Untuk pop up chatbot
document.addEventListener("DOMContentLoaded", function () {
  "use strict";
  let sttElem = document.querySelector(".stt");
  let screanHeight = window.innerHeight;
  let sttScroll = function sttScroll() {
    document.addEventListener("scroll", function (e) {
      if (screanHeight <= window.scrollY) {
        sttElem.classList.add("stt__active");
      } else if (e.target.scrollingElement.scrollTop <= screanHeight) {
        sttElem.classList.remove("stt__active");
        sttElem.style.pointerEvents = "auto";
      }
    });
  };
  let sttClick = function sttClick() {
    sttElem.addEventListener("click", function () {
      const url = "./chatbot/";
      window.open(url, "_blank");
    });
  };
  let sttFunc = function sttFunc() {
    sttScroll();
    sttClick();
  };
  document.addEventListener("DOMContentLoaded", sttFunc());
});
