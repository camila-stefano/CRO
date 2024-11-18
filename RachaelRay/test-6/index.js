window.onload = function () {
  // Disable discount

  const productIsAvailable =
    document.querySelector(".product__block product__block--buttons.hide") !==
    null;
  const countdownElement = document.getElementById("countdown");

  if (!productIsAvailable) {
    countdownElement.style.display = "none";
  }

  // Date UTC-8 (winter timezone)
  const countDownDate = new Date(Date.UTC(2024, 10, 27, 7, 59, 0)).getTime(); // This is 2024-11-27 23:59 en UTC-8

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    document.querySelector(".days").innerHTML = `${days} days`;
    document.querySelector(".hours").innerHTML = `${hours} hours`;

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").style.display = "none";
    }
  }

  updateCountdown();

  const x = setInterval(updateCountdown, 1000);
};
