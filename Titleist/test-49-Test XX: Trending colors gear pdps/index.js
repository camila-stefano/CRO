function waitForElement(selector, callback) {
  const observer = new MutationObserver((mutations) => {
    if (document.querySelector(selector)) {
      observer.disconnect();
      callback();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

waitForElement(".product-variations", function () {
  var divOriginal = document.querySelector(".product-variations");
  if (!divOriginal) return;

  var newElement = document.querySelector(".test-49");
  if (!newElement) {
    newElement = document.createElement("div");
    newElement.classList.add("test-49");
    divOriginal.appendChild(newElement);
  }

  newElement.innerHTML = `
       <div class="product-trendings" data-attributes="{}">
      <ul>
        <li class="attribute">
          <div class="label">Trending Colors</div>
          <div class="value">
            <ul class="swatches color">
              <li class="selectable">
                <a
                  class="swatchanchor"
                  href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=23TH21&amp;dwvar_23TH21_color="
                  title="Select Color: Charcoal/White"
                  data-lgimg='{"url":"/on/demandware.static/-/Sites-titleist-master/default/dw3173b184/TH23FTEL-0C1_01.png", "title":"Tour Elite", "alt":"Tour Elite", "hires":""}'
                >
                  <img
                    src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dw827b6118/TH23FTEL-0C1_sw.png?sw=60&amp;sh=60&amp;sm=fit"
                    alt="Charcoal/White"
                  />
                </a>
              </li>

              <li class="selectable">
                <a
                  class="swatchanchor"
                  href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Product-Variation?pid=23TH21&amp;dwvar_23TH21_color=WHTGRY"
                  title="Select Color: White/Gray"
                  data-lgimg='{"url":"/on/demandware.static/-/Sites-titleist-master/default/dwf92d76b1/TH23FTEL-10G_01.png", "title":"Tour Elite", "alt":"Tour Elite", "hires":""}'
                >
                  <img
                    src="https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dw538a6eee/TH23FTEL-10G_sw.png?sw=60&amp;sh=60&amp;sm=fit"
                    alt="White/Gray"
                  />
                </a>
              </li>

              <li class="selected-value color">
                Charcoal/White

                <div class="sku-curr sku-gear">TH23FTEL-14SM</div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <div class="custom-select-field"></div>
    </div>
    `;
});
