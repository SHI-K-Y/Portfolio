// 雪花效果的設定選項
const snowConfig = {
  // 設定要顯示雪花效果的月份（12-1）
  winterMonths: [12, 1],
  // 雪花的數量
  snowflakeCount: 15,
  // 雪花字符
  snowflakes: ["❅", "❆", "❄"],
};

document.addEventListener("DOMContentLoaded", function () {
  // 創建雪花容器
  const snowContainer = document.createElement("div");
  snowContainer.className = "snow-container";
  document.body.appendChild(snowContainer);

  // 創建多個雪花
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

  // 判斷是否為冬季
  function shouldShowSnow() {
    const today = new Date();
    const currentMonth = today.getMonth() + 1; // getMonth() 返回 0-11

    // 檢查是否在冬季月份
    return snowConfig.winterMonths.includes(currentMonth);
  }

  // 初始化雪花效果
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

  // 每天檢查一次是否需要顯示雪花
  initSnowEffect();

  // 每天午夜重新檢查
  setInterval(() => {
    const now = new Date();
    if (now.getHours() === 0 && now.getMinutes() === 0) {
      initSnowEffect();
    }
  }, 60000); // 每分鐘檢查一次
});
