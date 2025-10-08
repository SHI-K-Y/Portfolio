class I18n {
  constructor() {
    this.currentLanguage = localStorage.getItem("language") || "zh";
    this.init();
  }

  init() {
    this.createLanguageToggle();
    this.updateContent();
    this.updateHtmlLang();
  }

  createLanguageToggle() {
    const languageToggle = document.createElement("div");
    languageToggle.className = "language-toggle";
    languageToggle.innerHTML = `
      <button class="lang-btn ${this.currentLanguage === "zh" ? "active" : ""}" data-lang="zh">中文</button>
      <button class="lang-btn ${this.currentLanguage === "en" ? "active" : ""}" data-lang="en">EN</button>
    `;

    const nav = document.querySelector("nav");
    nav.appendChild(languageToggle);

    languageToggle.addEventListener("click", (e) => {
      if (e.target.classList.contains("lang-btn")) {
        this.switchLanguage(e.target.dataset.lang);
      }
    });
  }

  switchLanguage(lang) {
    this.currentLanguage = lang;
    localStorage.setItem("language", lang);
    this.updateContent();
    this.updateHtmlLang();

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });
  }

  updateHtmlLang() {
    document.documentElement.lang = this.currentLanguage === "zh" ? "zh-TW" : "en";
    document.title = this.currentLanguage === "zh" ? "施坤諺的個人網頁" : "Eric Shi's Personal Website";
  }

  updateContent() {
    const lang = languages[this.currentLanguage];

    this.updateNavigation(lang);

    this.updateHome(lang);

    this.updateAbout(lang);

    this.updateSkill(lang);

    this.updateWork(lang);

    this.updateContact(lang);

    this.updateFooter(lang);
  }

  updateNavigation(lang) {
    const navLinks = {
      "#home": lang.nav.home,
      "#about": lang.nav.about,
      "#skill": lang.nav.skill,
      "#work": lang.nav.work,
      "#contact": lang.nav.contact,
    };

    Object.entries(navLinks).forEach(([href, text]) => {
      const link = document.querySelector(`nav .nav-link[href="${href}"]`);
      if (link) link.textContent = text;

      const footerLink = document.querySelector(`footer a[href="${href}"]`);
      if (footerLink) footerLink.textContent = text;
    });
  }

  updateHome(lang) {
    const greetingEl = document.querySelector(".tag span");
    if (greetingEl) greetingEl.textContent = lang.home.greeting;

    const nameEl = document.querySelector(".name");
    if (nameEl) nameEl.textContent = lang.home.name;

    const subtitleEl = document.querySelector(".subtitle");
    if (subtitleEl) subtitleEl.textContent = lang.home.subtitle;

    const homeIcons = document.querySelectorAll("#home .icon .icon-name");
    homeIcons.forEach((icon) => {
      const parent = icon.parentElement;
      if (parent.id === "instagram-icon") icon.textContent = lang.home.icons.instagram;
      if (parent.id === "facebook-icon") icon.textContent = lang.home.icons.facebook;
      if (parent.id === "github-icon") icon.textContent = lang.home.icons.github;
    });
  }

  updateAbout(lang) {
    const aboutTitle = document.querySelector("#about .top-header h1");
    if (aboutTitle) aboutTitle.textContent = lang.about.title;

    const aboutSubtitle = document.querySelector("#about .top-header span");
    if (aboutSubtitle) aboutSubtitle.textContent = lang.about.subtitle;

    const introTitle = document.querySelector("#about .introduce h2");
    if (introTitle) introTitle.textContent = lang.about.intro_title;

    const introText = document.querySelector("#about .introduce .card div");
    if (introText) introText.textContent = lang.about.intro_text;

    const profileTitle = document.querySelector("#about .education h2");
    if (profileTitle) profileTitle.textContent = lang.about.profile_title;

    const profileItems = document.querySelectorAll("#about .education .item");
    if (profileItems[0]) {
      profileItems[0].querySelector("strong").textContent = lang.about.hometown;
      const hometownValueEl = profileItems[0].querySelector(".color:last-child");
      if (hometownValueEl) {
        hometownValueEl.innerHTML = "";

        const textNode = document.createTextNode(lang.about.hometown_value);
        hometownValueEl.appendChild(textNode);

        const flagImg = document.createElement("img");
        flagImg.src = "./assets/image/taiwan.png";
        flagImg.alt = "臺灣國旗";
        flagImg.className = "taiwan-flag";
        flagImg.style.cssText = `
          height: 1em;
          width: auto;
          margin-left: 0.3em;
          vertical-align: middle;
          display: inline-block;
        `;
        hometownValueEl.appendChild(flagImg);
      }
    }
    if (profileItems[1]) {
      profileItems[1].querySelector("strong").textContent = lang.about.birth_year;
      profileItems[1].querySelector(".color:last-child").textContent = lang.about.birth_year_value;
    }
    if (profileItems[2]) {
      profileItems[2].querySelector("strong").textContent = lang.about.school;
      profileItems[2].querySelector(".color:last-child").textContent = lang.about.school_value;
    }
  }

  updateSkill(lang) {
    const skillTitle = document.querySelector("#skill .top-header h1");
    if (skillTitle) skillTitle.textContent = lang.skill.title;

    const skillSubtitle = document.querySelector("#skill .top-header span");
    if (skillSubtitle) skillSubtitle.textContent = lang.skill.subtitle;

    const introvertedEl = document.querySelector(".trait-introverted");
    if (introvertedEl) introvertedEl.textContent = lang.skill.traits.introverted;

    const intuitiveEl = document.querySelector(".trait-intuitive");
    if (intuitiveEl) intuitiveEl.textContent = lang.skill.traits.intuitive;

    const feelingEl = document.querySelector(".trait-feeling");
    if (feelingEl) feelingEl.textContent = lang.skill.traits.feeling;

    const judgingEl = document.querySelector(".trait-judging");
    if (judgingEl) judgingEl.textContent = lang.skill.traits.judging;

    const percentIntrovertedEl = document.querySelector(".percent-introverted");
    if (percentIntrovertedEl) percentIntrovertedEl.textContent = lang.skill.percentages.introverted;

    const percentIntuitiveEl = document.querySelector(".percent-intuitive");
    if (percentIntuitiveEl) percentIntuitiveEl.textContent = lang.skill.percentages.intuitive;

    const percentFeelingEl = document.querySelector(".percent-feeling");
    if (percentFeelingEl) percentFeelingEl.textContent = lang.skill.percentages.feeling;

    const percentJudgingEl = document.querySelector(".percent-judging");
    if (percentJudgingEl) percentJudgingEl.textContent = lang.skill.percentages.judging;
  }

  updateWork(lang) {
    const workTitle = document.querySelector("#work .top-header h1");
    if (workTitle) workTitle.textContent = lang.work.title;

    const workSubtitle = document.querySelector("#work .top-header span");
    if (workSubtitle) workSubtitle.textContent = lang.work.subtitle;

    const workItems = document.querySelectorAll("#work .work-item");
    if (workItems[0]) {
      const title1 = workItems[0].querySelector(".work-title");
      const desc1 = workItems[0].querySelector(".work-description");
      const btn1 = workItems[0].querySelector(".work-btn");
      if (title1) title1.textContent = lang.work.project1.title;
      if (desc1) desc1.textContent = lang.work.project1.description;
      if (btn1) btn1.textContent = lang.work.project1.button;
    }

    if (workItems[1]) {
      const title2 = workItems[1].querySelector(".work-title");
      const desc2 = workItems[1].querySelector(".work-description");
      const btn2 = workItems[1].querySelector(".work-btn");
      if (title2) title2.textContent = lang.work.project2.title;
      if (desc2) desc2.textContent = lang.work.project2.description;
      if (btn2) btn2.textContent = lang.work.project2.button;
    }
  }

  updateContact(lang) {
    const contactTitle = document.querySelector("#contact .top-header h1");
    if (contactTitle) contactTitle.textContent = lang.contact.title;

    const contactSubtitle = document.querySelector("#contact .top-header span");
    if (contactSubtitle) contactSubtitle.textContent = lang.contact.subtitle;

    const infoTitle = document.querySelector("#contact .contact-info h2");
    if (infoTitle) infoTitle.textContent = lang.contact.info_title;

    const phoneElement = document.querySelector("#contact .contact-info .phone-text");
    if (phoneElement) phoneElement.textContent = lang.contact.phone;

    const instagramElement = document.querySelector("#contact .contact-info .instagram-text");
    if (instagramElement) instagramElement.textContent = lang.contact.instagram;

    const emailElement = document.querySelector("#contact .contact-info .email-text");
    if (emailElement) emailElement.textContent = lang.contact.email;

    const timezoneElement = document.querySelector("#contact .contact-info .timezone-text");
    if (timezoneElement) timezoneElement.textContent = lang.contact.timezone;

    const nameInput = document.querySelector('#contact input[name="name"]');
    if (nameInput) nameInput.placeholder = lang.contact.form.name;

    const emailInput = document.querySelector('#contact input[name="_replyto"]');
    if (emailInput) emailInput.placeholder = lang.contact.form.email;

    const messageInput = document.querySelector('#contact textarea[name="message"]');
    if (messageInput) messageInput.placeholder = lang.contact.form.message;

    const sendBtn = document.querySelector("#contact .btn-send");
    if (sendBtn) {
      sendBtn.innerHTML = `${lang.contact.form.send} <i class="fa-regular fa-message"></i>`;
    }
  }

  updateFooter(lang) {
    const menuTitle = document.querySelector("footer .footer-title");
    if (menuTitle) menuTitle.textContent = lang.footer.menu;

    const linksTitle = document.querySelectorAll("footer .footer-title")[1];
    if (linksTitle) linksTitle.textContent = lang.footer.links;

    const copyright = document.querySelector(".bottom-footer");
    if (copyright) copyright.textContent = lang.footer.copyright;

    const footerIcons = document.querySelectorAll("footer .icon .icon-name");
    footerIcons.forEach((icon) => {
      const parent = icon.parentElement;
      if (parent.id === "instagram-icon") icon.textContent = lang.home.icons.instagram;
      if (parent.id === "facebook-icon") icon.textContent = lang.home.icons.facebook;
      if (parent.id === "github-icon") icon.textContent = lang.home.icons.github;
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    new I18n();
  }, 100);
});
