function waitForElement(selector, callback) {
  const observer = new MutationObserver((mutations) => {
    if (document.querySelector(selector)) {
      observer.disconnect();
      callback();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

waitForElement(".mini-cart-totals", function () {
  const containerElement = document.querySelector(".mini-cart-totals");

  if (containerElement) {
    const newElement = document.createElement("div");
    newElement.className = "test-35-container";
    newElement.innerHTML = `
        <img class="test-35-child-img" alt="alt-placeholder" src="https://www.footjoy.com/on/demandware.static/Sites-footjoy-Site/-/en_US/v1730700608065/images/return-center-icon.gif">
        <p class="test-35-child-p">Free returns in the US. Exclusions may apply.</p>
      `;

    containerElement.appendChild(newElement);
  }
});
