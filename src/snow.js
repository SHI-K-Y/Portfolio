const snowConfig = {
  winterMonths: [12, 1],
  snowflakeCount: 15,
  snowflakes: ["❅", "❆", "❄"],
};

document.addEventListener("DOMContentLoaded", function () {
  const snowContainer = document.createElement("div");
  snowContainer.className = "snow-container";
  document.body.appendChild(snowContainer);

  function createSnowflakes() {
    for (let i = 0; i < snowConfig.snowflakeCount; i++) {
      const snowflake = document.createElement("div");
      snowflake.className = "snowflake";
      snowflake.style.left = Math.random() * 100 + "%";
      snowflake.style.animationDelay = Math.random() * 5 + "s";
      snowflake.innerHTML = snowConfig.snowflakes[Math.floor(Math.random() * snowConfig.snowflakes.length)];
      snowContainer.appendChild(snowflake);
    }
  }

  function shouldShowSnow() {
    const today = new Date();
    const currentMonth = today.getMonth() + 1;

    return snowConfig.winterMonths.includes(currentMonth);
  }

  function initSnowEffect() {
    if (shouldShowSnow()) {
      createSnowflakes();
      snowContainer.style.display = "block";
      console.log("雪花效果已啟動");
    } else {
      snowContainer.style.display = "none";
      console.log("目前不在設定的下雪期間");
    }
  }

  initSnowEffect();

  setInterval(() => {
    const now = new Date();
    if (now.getHours() === 0 && now.getMinutes() === 0) {
      initSnowEffect();
    }
  }, 60000);
});
