const sakuraConfig = {
  springMonths: [2, 3, 4],
  sakuraCount: 15,
  sakuras: ["🌸", "💮", "🌸"],
};

document.addEventListener("DOMContentLoaded", function () {
  const sakuraContainer = document.createElement("div");
  sakuraContainer.className = "sakura-container";
  document.body.appendChild(sakuraContainer);

  function createSakuras() {
    for (let i = 0; i < sakuraConfig.sakuraCount; i++) {
      const sakura = document.createElement("div");
      sakura.className = "sakura";
      sakura.style.left = Math.random() * 100 + "%";
      sakura.style.animationDelay = Math.random() * 5 + "s";
      sakura.innerHTML = sakuraConfig.sakuras[Math.floor(Math.random() * sakuraConfig.sakuras.length)];
      sakuraContainer.appendChild(sakura);
    }
  }

  function shouldShowSakura() {
    const today = new Date();
    const currentMonth = today.getMonth() + 1;

    return sakuraConfig.springMonths.includes(currentMonth);
  }

  function initSakuraEffect() {
    if (shouldShowSakura()) {
      createSakuras();
      sakuraContainer.style.display = "block";
      console.log("櫻花效果已啟動");
    } else {
      sakuraContainer.style.display = "none";
      console.log("目前不在設定的飄櫻期間");
    }
  }

  initSakuraEffect();

  setInterval(() => {
    const now = new Date();
    if (now.getHours() === 0 && now.getMinutes() === 0) {
      initSakuraEffect();
    }
  }, 60000);
});
