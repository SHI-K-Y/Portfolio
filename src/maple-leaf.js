const leafConfig = {
  autumnMonths: [9, 10, 11],

  leafCount: 10,

  leaves: ["🍁", "🍂", "🍁"],
};

document.addEventListener("DOMContentLoaded", function () {
  const leafContainer = document.createElement("div");
  leafContainer.className = "leaf-container";
  document.body.appendChild(leafContainer);

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

  function shouldShowLeaves() {
    const today = new Date();
    const currentMonth = today.getMonth() + 1;

    return leafConfig.autumnMonths.includes(currentMonth);
  }

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

  initLeafEffect();

  setInterval(() => {
    const now = new Date();
    if (now.getHours() === 0 && now.getMinutes() === 0) {
      initLeafEffect();
    }
  }, 60000);
});
