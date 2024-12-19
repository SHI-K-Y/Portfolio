document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS
  AOS.init({
    duration: 800,
    once: false,
    offset: 120,
    easing: "ease-in-out",
  });

  // Social media icon click handlers
  const icons = [
    { id: "instagram-icon", url: "https://www.instagram.com/k.y.shi_/" },
    { id: "facebook-icon", url: "https://www.facebook.com/kunyan.shi/" },
    { id: "github-icon", url: "https://github.com/SHI-K-Y" },
  ];

  icons.forEach(({ id, url }) => {
    document.querySelectorAll(`#home #${id}, footer #${id}`).forEach((icon) => {
      if (icon) {
        icon.addEventListener("click", () => window.open(url, "_blank"));
      }
    });
  });

  // Automatic animation class assignment
  const elements = document.querySelectorAll("section, .content, .animate-target");
  elements.forEach((el) => el.classList.add("animated-section"));

  // Intersection Observer for scroll animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => observer.observe(el));

  // Navbar scroll effect
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

    if (currentScrollY > 50) {
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

  if (window.location.pathname === "/" || window.location.pathname === "/index.html") {
    navHeader.classList.add("transparent");
  }

  // Trigger progress bar animation
  const skillSection = document.querySelector("#skill");
  const progressBars = document.querySelectorAll(".progress-bar-wrap");

  function triggerProgressBarAnimation() {
    const skillSectionTop = skillSection.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    if (skillSectionTop < viewportHeight - 100) {
      progressBars.forEach((bar) => bar.classList.add("active"));
      window.removeEventListener("scroll", triggerProgressBarAnimation);
    }
  }

  window.addEventListener("scroll", triggerProgressBarAnimation);

  // Scroll active link highlight
  function scrollActive() {
    const sections = document.querySelectorAll("section[id]");
    const scrollY = window.scrollY;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute("id");

      const link = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);
      if (link) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight - 100) {
          link.classList.add("active-link");
        } else {
          link.classList.remove("active-link");
        }
      }
    });
  }

  window.addEventListener("scroll", scrollActive);

  // Navigation menu toggle
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

  // Contact form validation
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

  sendButton.addEventListener("click", function () {
    if (validateForm()) {
      alert("表單驗證成功！");
    }
  });

  [nameInput, emailInput, messageInput].forEach((input) => {
    input.addEventListener("input", validateForm);
  });

  // Prevent right-click on images
  document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("contextmenu", (e) => e.preventDefault());
  });
});
