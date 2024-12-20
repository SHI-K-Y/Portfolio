const fireflyConfig = {
  summerMonths: [5, 6, 7, 8],
  fireflyCount: 10,
};

document.addEventListener("DOMContentLoaded", function () {
  const fireflyContainer = document.createElement("div");
  fireflyContainer.className = "firefly-container";
  document.body.appendChild(fireflyContainer);

  function createFireflies() {
    for (let i = 0; i < fireflyConfig.fireflyCount; i++) {
      const firefly = document.createElement("div");
      firefly.className = "firefly";
      firefly.style.left = Math.random() * 100 + "%";
      firefly.style.top = Math.random() * 100 + "%";
      firefly.style.animationDelay = Math.random() * 5 + "s, " + Math.random() * 10 + "s";
      fireflyContainer.appendChild(firefly);
    }
  }

  function shouldShowFirefly() {
    const today = new Date();
    const currentMonth = today.getMonth() + 1;

    return fireflyConfig.summerMonths.includes(currentMonth);
  }

  function initFireflyEffect() {
    if (shouldShowFirefly()) {
      createFireflies();
      fireflyContainer.style.display = "block";
      console.log("螢火蟲效果已啟動");
    } else {
      fireflyContainer.style.display = "none";
      console.log("目前不在設定的螢火蟲期間");
    }
  }

  initFireflyEffect();

  setInterval(() => {
    const now = new Date();
    if (now.getHours() === 0 && now.getMinutes() === 0) {
      initFireflyEffect();
    }
  }, 60000);
});
