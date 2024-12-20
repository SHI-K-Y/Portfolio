// 螢火蟲效果的設定選項
const fireflyConfig = {
  // 設定要顯示螢火蟲效果的月份（6-8）
  summerMonths: [5, 6, 7, 8],
  // 螢火蟲的數量
  fireflyCount: 8,
};

document.addEventListener("DOMContentLoaded", function () {
  // 創建螢火蟲容器
  const fireflyContainer = document.createElement("div");
  fireflyContainer.className = "firefly-container";
  document.body.appendChild(fireflyContainer);

  // 創建多個螢火蟲
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

  // 判斷是否為夏季
  function shouldShowFirefly() {
    const today = new Date();
    const currentMonth = today.getMonth() + 1; // getMonth() 返回 0-11

    // 檢查是否在夏季月份
    return fireflyConfig.summerMonths.includes(currentMonth);
  }

  // 初始化螢火蟲效果
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

  // 每天檢查一次是否需要顯示螢火蟲
  initFireflyEffect();

  // 每天午夜重新檢查
  setInterval(() => {
    const now = new Date();
    if (now.getHours() === 0 && now.getMinutes() === 0) {
      initFireflyEffect();
    }
  }, 60000); // 每分鐘檢查一次
});
