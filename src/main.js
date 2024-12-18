document.addEventListener("DOMContentLoaded", function () {
  const homeInstagramIcon = document.querySelector("#home #instagram-icon");
  const homeInstagramIconFooter = document.querySelector("footer #instagram-icon");
  const homeFacebookIcon = document.querySelector("#home #facebook-icon");
  const homeFacebookIconFooter = document.querySelector("footer #facebook-icon");
  const homeGithubIcon = document.querySelector("#home #github-icon");
  const homeGithubIconFooter = document.querySelector("footer #github-icon");

  [homeInstagramIcon, homeInstagramIconFooter].forEach((icon) => {
    if (icon) {
      icon.addEventListener("click", function () {
        window.open("https://www.instagram.com/k.y.shi_/", "_blank");
      });
    }
  });

  [homeFacebookIcon, homeFacebookIconFooter].forEach((icon) => {
    if (icon) {
      icon.addEventListener("click", function () {
        window.open("https://www.facebook.com/kunyan.shi/", "_blank");
      });
    }
  });

  [homeGithubIcon, homeGithubIconFooter].forEach((icon) => {
    if (icon) {
      icon.addEventListener("click", function () {
        window.open("https://github.com/SHI-K-Y", "_blank");
      });
    }
  });
});

let lastScrollY = window.scrollY;
const navHeader = document.getElementById("header");

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > 50) {
    if (currentScrollY > lastScrollY) {
      navHeader.style.transform = "translateY(-100%)";
    } else {
      navHeader.style.transform = "translateY(0)";
    }
  }

  lastScrollY = currentScrollY;
});

document.addEventListener("DOMContentLoaded", function () {
  if (window.location.pathname === "/" || window.location.pathname === "/index.html") {
    navHeader.classList.add("transparent");
  }

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navHeader.classList.remove("transparent");
      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";
    } else {
      navHeader.classList.add("transparent");
      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";
    }
  });
});

function triggerProgressBarAnimation() {
  const skillSection = document.querySelector("#skill");
  const progressBars = document.querySelectorAll(".progress-bar-wrap");

  const skillSectionTop = skillSection.getBoundingClientRect().top;
  const viewportHeight = window.innerHeight;

  if (skillSectionTop < viewportHeight - 100) {
    progressBars.forEach((bar) => {
      bar.classList.add("active");
    });
    window.removeEventListener("scroll", triggerProgressBarAnimation);
  }
}

function scrollActive() {
  const sections = document.querySelectorAll("section[id]");
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight - 100) {
      document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.add("active-link");
    } else {
      document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.remove("active-link");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const navMenuBtn = document.querySelector(".nav-menu-btn");
  const navMenu = document.querySelector(".nav-menu");

  navMenuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("responsive");
    navMenuBtn.classList.toggle("active");
  });

  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("responsive");
      navMenuBtn.classList.remove("active");
    });
  });
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function () {
    document.querySelectorAll(".nav-link").forEach((l) => l.classList.remove("active"));

    this.classList.add("active");
  });
});

document.querySelectorAll(".contact-container").forEach((link) => {
  link.addEventListener("click", function () {
    document.querySelectorAll(".contact-container").forEach((l) => l.classList.remove("active"));

    this.classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const contactInfo = document.querySelector(".contact-info");

  const formElements = document.querySelectorAll("input, textarea, button");

  contactInfo.addEventListener("click", function (event) {
    event.stopPropagation();
    contactInfo.classList.add("active");
  });

  document.addEventListener("click", function (event) {
    if (!contactInfo.contains(event.target)) {
      contactInfo.classList.remove("active");
    }
  });

  formElements.forEach((element) => {
    element.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-container .form");
  const nameInput = form.querySelector('input[placeholder="姓名"]');
  const emailInput = form.querySelector('input[placeholder="信箱"]');
  const messageInput = form.querySelector('textarea[placeholder="訊息"]');
  const sendButton = form.querySelector(".btn");

  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  }

  function validateForm() {
    let isValid = true;

    if (nameInput.value.trim() === "") {
      nameInput.style.borderColor = "red";
      isValid = false;
    } else {
      nameInput.style.borderColor = "var(--logo-color)";
    }

    if (!validateEmail(emailInput.value)) {
      emailInput.style.borderColor = "red";
      isValid = false;
    } else {
      emailInput.style.borderColor = "var(--logo-color)";
    }

    if (messageInput.value.trim() === "") {
      messageInput.style.borderColor = "red";
      isValid = false;
    } else {
      messageInput.style.borderColor = "var(--logo-color)";
    }

    return isValid;
  }

  sendButton.addEventListener("click", function (e) {
    if (validateForm()) {
      alert("表單驗證成功！");
    }
  });

  [nameInput, emailInput, messageInput].forEach((input) => {
    input.addEventListener("input", validateForm);
  });
});

window.addEventListener("scroll", scrollActive);
window.addEventListener("scroll", triggerProgressBarAnimation);
document.addEventListener("DOMContentLoaded", scrollActive);
document.addEventListener("load", scrollActive, true);
