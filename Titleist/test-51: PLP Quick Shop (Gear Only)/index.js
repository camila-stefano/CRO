setInterval(() => {
  document.querySelectorAll(".grid-tile").forEach((tile) => {
    const quickview = tile.querySelector(".quickview");
    const pricing = tile.querySelector(".product-pricing");

    if (quickview) {
      quickview.style.setProperty("display", "none", "important");
    }

    if (pricing) {
      pricing.style.setProperty("top", "0", "important");
    }
  });
}, 300);
