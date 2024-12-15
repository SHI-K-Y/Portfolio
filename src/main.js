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
        window.open("https://www.facebook.com/share/1AjpnxWFTF/?mibextid=wwXIfr", "_blank");
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

window.onscroll = function () {
  headerShadow();
  triggerProgressBarAnimation();
};

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

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

const sections = document.querySelectorAll("section[id]");

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

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    document.querySelectorAll(".nav-link").forEach((nav) => nav.classList.remove("active-link"));

    e.target.classList.add("active-link");

    scrollActive();
  });
});

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const navHeader = document.getElementById("header");

  if (window.scrollY > lastScrollY) {
    navHeader.style.transform = "translateY(-100%)";
  } else {
    navHeader.style.transform = "translateY(0)";
  }

  lastScrollY = window.scrollY;
});

window.addEventListener("scroll", scrollActive);
window.addEventListener("scroll", triggerProgressBarAnimation);
document.addEventListener("DOMContentLoaded", scrollActive);
document.addEventListener("load", scrollActive, true);
