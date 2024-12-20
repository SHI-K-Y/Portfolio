// 櫻花效果的設定選項
const sakuraConfig = {
  // 設定要顯示櫻花效果的月份（2-4）
  springMonths: [2, 3, 4],
  // 櫻花的數量
  sakuraCount: 15,
  // 櫻花字符
  sakuras: ["🌸", "💮", "🌸"],
};

document.addEventListener("DOMContentLoaded", function () {
  // 創建櫻花容器
  const sakuraContainer = document.createElement("div");
  sakuraContainer.className = "sakura-container";
  document.body.appendChild(sakuraContainer);

  // 創建多個櫻花
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

  // 判斷是否為春季
  function shouldShowSakura() {
    const today = new Date();
    const currentMonth = today.getMonth() + 1; // getMonth() 返回 0-11

    // 檢查是否在春季月份
    return sakuraConfig.springMonths.includes(currentMonth);
  }

  // 初始化櫻花效果
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

  // 每天檢查一次是否需要顯示櫻花
  initSakuraEffect();

  // 每天午夜重新檢查
  setInterval(() => {
    const now = new Date();
    if (now.getHours() === 0 && now.getMinutes() === 0) {
      initSakuraEffect();
    }
  }, 60000); // 每分鐘檢查一次
});
