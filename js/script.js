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
  preloadImage("/image/aset-1.webp", "/image/aset-2.webp", "/image/chatbot.webp", "/image/cloud.webp", "/image/Curtain-left.webp", "/image/Curtain-right.webp", "/image/kipas.webp", "/image/logo.webp")
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

  //Script To Reveal Content
function reveal() {
  let reveals = document.querySelectorAll(".reveal, .inreveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
});

//Untuk Contact Form
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".input2").forEach(function (input) {
    input.addEventListener("blur", function () {
      if (this.value.trim() !== "") {
        this.classList.add("has-val");
      } else {
        this.classList.remove("has-val");
      }
    });
  });

  let nameInput = document.querySelector('.validate-input input[name="name"]');
  let emailInput = document.querySelector('.validate-input input[name="email"]');
  let messageInput = document.querySelector('.validate-input textarea[name="message"]');
  let form = document.querySelector(".validate-form");

  form.addEventListener("submit", function (event) {
    let check = true;
    if (nameInput.value.trim() === "") {
      showValidate(nameInput);
      check = false;
    }
    if (emailInput.value.trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) === null) {
      showValidate(emailInput);
      check = false;
    }
    if (messageInput.value.trim() === "") {
      showValidate(messageInput);
      check = false;
    }
    if (!check) {
      event.preventDefault();
    }
    nameInput.classList.remove("has-val");
    emailInput.classList.remove("has-val");
    messageInput.classList.remove("has-val");
    setTimeout(function() {
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";
    }, 200);
  });

  document.querySelectorAll(".validate-form .input2").forEach(function (input) {
    let formulir = document.querySelector(".contact2-form-btn");
    input.addEventListener("focus", function () {
      hideValidate(this);
    });
    formulir.addEventListener("click", function () {
      hideValidate(this);
    });
  });

  function showValidate(input) {
    let thisAlert = input.parentElement;
    thisAlert.classList.add("alert-validate");
  }

  function hideValidate(input) {
    let thisAlert = input.parentElement;
    thisAlert.classList.remove("alert-validate");
  }
});

//Fungsi mengirim pesan
function send() {
  Email.send({
    SecureToken : "f30c75e7-8644-442e-91d3-b83d4c311057",
    To : 'daffahmadibrahim@gmail.com',
    From : 'daffabot@programer.net',
    Subject : "New Contact Form Enquiry",
    Body : "Name: " + document.getElementById("name").value
       + "<br> Email: " + document.getElementById("email").value
       + "<br> Message: " + document.getElementById("message").value
})
.then(function (message) {
  if (message == "OK") {
    alert("Message Succesfully Sent!");
  } else {
    alert(message);
  }
})
.catch((error) => {
  alert("Error Sending Message: " + error);
});
}
