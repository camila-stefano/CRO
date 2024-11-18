function waitForElement(selector, callback) {
  const observer = new MutationObserver((mutations) => {
    if (document.querySelector(selector)) {
      observer.disconnect();
      callback();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

waitForElement(".cart-drawer__foot.cart__foot", function () {
  const containerElement = document.querySelector(
    ".cart-drawer__foot.cart__foot"
  );

  if (containerElement) {
    containerElement.innerHTML =
      `
        <div id="test-10-container">
          <div class="test-10-child">
            <img alt="alt-placeholder" src="https://circulon.com/cdn/shop/files/35_Years_Experience_-_Blue_Icon_only.png">
            <p class="cart__item__title">6,000+ 5 Star Reviews</p>
          </div>
          <div class="test-10-child">
            <img alt="alt-placeholder" src="https://circulon.com/cdn/shop/files/Lifetime_Warranty_-_Blue_Icon_only.png">
            <p class="cart__item__title">Limited Lifetime Warranty</p>
          </div>
          <div class="test-10-child">
            <img alt="alt-placeholder" src="https://circulon.com/cdn/shop/files/Free_Shipping_-_Blue_Icon_Only.png">
            <p class="cart__item__title">30-Day Free Returns</p>
          </div>
        </div>
      ` + containerElement.innerHTML;
  }
});
