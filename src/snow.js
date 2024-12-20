document.addEventListener("DOMContentLoaded", function () {
  const snowContainer = document.createElement("div");
  snowContainer.className = "snow-container";
  document.body.appendChild(snowContainer);

  const snowflakes = ["❅", "❆", "❄"];

  function createSnowflakes() {
    for (let i = 0; i < 10; i++) {
      const snowflake = document.createElement("div");
      snowflake.className = "snowflake";
      snowflake.style.left = Math.random() * 100 + "%";
      snowflake.style.animationDelay = Math.random() * 5 + "s";
      snowflake.innerHTML = snowflakes[Math.floor(Math.random() * snowflakes.length)];
      snowContainer.appendChild(snowflake);
    }
  }

  createSnowflakes();

  function isWinter() {
    const month = new Date().getMonth() + 1;
    return month === 12 || month === 1 || month === 2;
  }

  if (!isWinter()) {
    snowContainer.style.display = "none";
  }
});
