convert.$(document).ready(function () {
  const trendingProducts = {
    T250: "Iron",
    T350: "Iron",
    T150: "Iron",
    "Pro V1": "Balls",
    "Vokey SM10 - Tour Chrome": "Wedge",
    T100: "Iron",
    "GT1 3Tour": "Fairway",
    "GT2 Driver": "Driver",
    "Players 4": "Stand Bags",
    "T250 Launch Spec": "Iron",
    "Vokey SM10 - Nickel": "Wedge",
    "Vokey SM10 - Jet Black": "Wedge",
    "GT2 Fairway": "Fairway",
    "Pro V1x": "Balls",
    "Phantom Black 9.2R": "Putters",
    "Vokey SM10 - Black Vapor": "Wedge",
    "GT3 Driver": "Driver",
    "Vokey SM10 - Raw": "Wedge",
    "GT280 Mini Driver": "Fairway",
    "T250•U": "Utility",
    "U•505": "Utility",
    "LINKSLEGEND Members Bag": "LINKSLEGEND",
    "Players 4 Carbon": "Stand Bags",
    "620 MB": "Iron",
    "Phantom Black 5.5": "Putters",
    "GT2 Hybrid": "Hybrid",
    "Hybrid 14": "Hybrid Bags",
    "Pro V1x Left Dash": "Balls",
    "620 CB": "Iron",
    "GT1 Fairway": "Fairway",
    "Players 5": "Stand Bags",
    AVX: "Balls",
    "Tour Soft": "Balls",
    "GT1 Driver": "Driver",
    "Cart 14": "Cart Bags",
    "Hybrid 5": "Hybrid Bags",
    "GT3 Fairway": "Fairway",
    "Tour Performance": "Adjustable",
    "GT4 Driver": "Driver",
    "GT3 Hybrid": "Hybrid",
    "GT1 Hybrid": "Hybrid",
    "Players 4 StaDry": "Stand Bags",
    "Phantom Black 7": "Plutters",
    "Cart 15": "Cart Bags",
    TruFeel: "Balls",
    "Tour Elite": "Fitted",
    "Pro V1 AIM Performance": "Balls",
    "Phantom Black 11": "Putters",
    Velocity: "Balls",
    "AVX AIM 360": "Balls",
  };

  function addTrendingBadge(trendingProducts) {
    const nameLinks = document.querySelectorAll("a.name-link");

    nameLinks.forEach((link) => {
      const productName = link.textContent.trim();

      if (trendingProducts[productName]) {
        const productTile = link.closest(".product-tile");
        const imageContainer = productTile?.querySelector(".product-image");

        if (imageContainer) {
          if (!imageContainer.querySelector(".trending-badge")) {
            const badge = document.createElement("div");
            badge.innerHTML = `<p class="trending-badge-test-52" style="color: #b51029; font-size: 12px; line-height: 15px; font-weight: bold;font-family: inherit; margin-bottom: 4px; margin: 0;padding-bottom: 4px">TRENDING</p>`;
            imageContainer.insertAdjacentElement("afterend", badge);
          }
        }
      }
    });
  }
  addTrendingBadge(trendingProducts);
});
