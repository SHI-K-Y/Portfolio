// 楓葉效果的設定選項
const leafConfig = {
  // 設定要顯示楓葉效果的月份（9-11）
  autumnMonths: [9, 10, 11],
  // 楓葉的數量
  leafCount: 10,
  // 楓葉字符
  leaves: ["🍁", "🍂", "🍁"],
};

document.addEventListener("DOMContentLoaded", function () {
  // 創建楓葉容器
  const leafContainer = document.createElement("div");
  leafContainer.className = "leaf-container";
  document.body.appendChild(leafContainer);

  // 創建多個楓葉
  function createLeaves() {
    for (let i = 0; i < leafConfig.leafCount; i++) {
      const leaf = document.createElement("div");
      leaf.className = "maple-leaf";
      leaf.style.left = Math.random() * 100 + "%";
      leaf.style.animationDelay = Math.random() * 5 + "s";
      leaf.innerHTML = leafConfig.leaves[Math.floor(Math.random() * leafConfig.leaves.length)];
      leafContainer.appendChild(leaf);
    }
  }

  // 判斷是否為秋季
  function shouldShowLeaves() {
    const today = new Date();
    const currentMonth = today.getMonth() + 1; // getMonth() 返回 0-11

    // 檢查是否在秋季月份
    return leafConfig.autumnMonths.includes(currentMonth);
  }

  // 初始化楓葉效果
  function initLeafEffect() {
    if (shouldShowLeaves()) {
      createLeaves();
      leafContainer.style.display = "block";
      console.log("楓葉效果已啟動");
    } else {
      leafContainer.style.display = "none";
      console.log("目前不在設定的楓葉期間");
    }
  }

  // 每天檢查一次是否需要顯示楓葉
  initLeafEffect();

  // 每天午夜重新檢查
  setInterval(() => {
    const now = new Date();
    if (now.getHours() === 0 && now.getMinutes() === 0) {
      initLeafEffect();
    }
  }, 60000); // 每分鐘檢查一次
});
