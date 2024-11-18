function addHTML() {
  var newElement = document.createElement("div");

  if (document.location.pathname === "/golf-gear/golf-hats/") {
    newElement.innerHTML = `
    <div id="test-xx">
      <p>Shop by style</p>
      <div class="testSlider">
        <a href="/golf-gear/golf-hats/adjustable-hats/">
          <div class="principal-image active">
            <img alt="alt-placeholder" src="https://titleist.com/on/demandware.static/-/Library-Sites-TitleistSharedLibrary/default/v3ffde2ba963d11a21315130bd818bedc435a84ca/images/Gear/PLP-Subnav-Adjustable.jpg?version=1,717,587,485,266">
          </div>
          <p>Adjustable</p>
        </a>
        <a href="/golf-gear/golf-hats/fitted-hats/">
          <div class="principal-image active">
            <img alt="alt-placeholder" src="https://titleist.com/on/demandware.static/-/Library-Sites-TitleistSharedLibrary/default/v3ffde2ba963d11a21315130bd818bedc435a84ca/images/Gear/PLP-Subnav-Fitted.jpg?version=1,717,587,506,351">
          </div>
          <p>Fitted</p>
        </a>
        <a href="/golf-gear/golf-hats/elements-hats/">
          <div class="principal-image active">
            <img alt="alt-placeholder" src="https://titleist.com/on/demandware.static/-/Library-Sites-TitleistSharedLibrary/default/vaa355f1160fb7d0cb17fc2f99259e695fe0a3a3d/images/Gear/PLP-Subnav-Elements2.jpg?version=1,717,700,574,155">
          </div>
          <p>Elements</p>
        </a>
        <a href="/golf-gear/golf-hats/juniors-hats/">
          <div class="principal-image active">
            <img alt="alt-placeholder" src="https://titleist.com/on/demandware.static/-/Library-Sites-TitleistSharedLibrary/default/v3ffde2ba963d11a21315130bd818bedc435a84ca/images/Gear/PLP-Subnav-Junior.jpg?version=1,717,587,519,052">
          </div>
          <p>Junior</p>
        </a>
        <a href="/golf-gear/golf-hats/womens-hats/">
          <div class="principal-image active">
            <img alt="alt-placeholder" src="https://titleist.com/on/demandware.static/-/Library-Sites-TitleistSharedLibrary/default/v3ffde2ba963d11a21315130bd818bedc435a84ca/images/Gear/PLP-Subnav-Women.jpg?version=1,717,587,525,563">
          </div>
          <p>Women</p>
        </a>
      </div>
        <div class="progressBar" role="progressbar" aria-valuemin="0" aria-valuemax="100">
      </div>
    </div>
    `;
  } else if (document.location.pathname === "/golf-gear/golf-bags/") {
    newElement.innerHTML = `
    <div id="test-xx">
      <p>Shop by style</p>
      <div class="testSlider">
        <a href="/golf-gear/golf-bags/tour-bags/">
          <div class="principal-image active">
            <img alt="alt-placeholder" src="https://www.titleist.com/on/demandware.static/-/Library-Sites-TitleistSharedLibrary/default/ve6307609cac6a555a946564f0b8e22313095a868/images/Gear/PLP%2DSubnav%2DTour%2DBags.jpg?version=1,731,004,238,891">
          </div>
          <p>Tour Bags</p>
        </a>
        <a href="/golf-gear/golf-bags/stand-bags/">
          <div class="principal-image active">
            <img alt="alt-placeholder" src="https://titleist.com/on/demandware.static/-/Library-Sites-TitleistSharedLibrary/default/v3ffde2ba963d11a21315130bd818bedc435a84ca/images/Gear/PLP-Subnav-Stand-Bags.jpg?version=1,717,533,018,180">
          </div>
          <p>Stand Bags</p>
        </a>
        <a href="/golf-gear/golf-bags/hybrid-stand-bags/">
          <div class="principal-image active">
            <img alt="alt-placeholder" src="https://titleist.com/on/demandware.static/-/Library-Sites-TitleistSharedLibrary/default/v3ffde2ba963d11a21315130bd818bedc435a84ca/images/Gear/PLP-Subnav-Hybrid-Bags.jpg?version=1,717,532,931,571">
          </div>
          <p>Hybrid Bags</p>
        </a>
        <a href="/golf-gear/golf-bags/cart-bags/">
          <div class="principal-image active">
            <img alt="alt-placeholder" src="https://titleist.com/on/demandware.static/-/Library-Sites-TitleistSharedLibrary/default/v3ffde2ba963d11a21315130bd818bedc435a84ca/images/Gear/PLP-Subnav-Cart-Bags.jpg?version=1,717,532,852,479">
          </div>
          <p>Cart Bags</p>
        </a>
        <a href="/golf-gear/golf-bags/carry-bags/">
          <div class="principal-image active">
            <img alt="alt-placeholder" src="https://titleist.com/on/demandware.static/-/Library-Sites-TitleistSharedLibrary/default/v3ffde2ba963d11a21315130bd818bedc435a84ca/images/Gear/PLP-Subnav-Carry-Bags.jpg?version=1,717,532,661,392">
          </div>
          <p>Carry Bags</p>
        </a>
        <a href="/golf-gear/golf-bags/linkslegend/">
          <div class="principal-image active">
            <img alt="alt-placeholder" src="https://titleist.com/on/demandware.static/-/Library-Sites-TitleistSharedLibrary/default/v3ffde2ba963d11a21315130bd818bedc435a84ca/images/Gear/PLP-Subnav-LINKSLEGEND.jpg?version=1,717,532,972,344">
          </div>
          <p>LinksLegend</p>
        </a>
      </div>
        <div class="progressBar" role="progressbar" aria-valuemin="0" aria-valuemax="100">
      </div>
    </div>
    `;
  } else if (document.location.pathname === "/golf-gear/") {
    newElement.innerHTML = `
    <div id="test-xx">
      <p>Shop by Category</p>
      <div class="testSlider">
        <a href="/golf-gear/golf-bags/">
          <div class="principal-image active">
            <img alt="alt-placeholder" src="https://titleist.com/on/demandware.static/-/Library-Sites-TitleistSharedLibrary/default/v3ffde2ba963d11a21315130bd818bedc435a84ca/images/Gear/PLP-Subnav-GolfBags.jpg?version=1,717,587,300,695">
          </div>
          <p>Golf Bags</p>
        </a>
        <a href="/golf-gear/golf-hats/">
          <div class="principal-image active">
            <img alt="alt-placeholder" src="https://titleist.com/on/demandware.static/-/Library-Sites-TitleistSharedLibrary/default/v3ffde2ba963d11a21315130bd818bedc435a84ca/images/Gear/PLP-Subnav-Headwear.jpg?version=1,717,587,315,156">
          </div>
          <p>Headwear</p>
        </a>
        <a href="/golf-gear/golf-gloves/">
          <div class="principal-image active">
            <img alt="alt-placeholder" src="https://titleist.com/on/demandware.static/-/Library-Sites-TitleistSharedLibrary/default/v3ffde2ba963d11a21315130bd818bedc435a84ca/images/Gear/PLP-Subnav-Gloves.jpg?version=1,717,587,284,309">
          </div>
          <p>Gloves</p>
        </a>
        <a href="/golf-gear/golf-headcovers/">
          <div class="principal-image active">
            <img alt="alt-placeholder" src="https://titleist.com/on/demandware.static/-/Library-Sites-TitleistSharedLibrary/default/v3ffde2ba963d11a21315130bd818bedc435a84ca/images/Gear/PLP-Subnav-Headcovers.jpg?version=1,717,587,307,971">
          </div>
          <p>Headcovers</p>
        </a>
        <a href="/golf-gear/golf-accessories/">
          <div class="principal-image active">
            <img alt="alt-placeholder" src="https://titleist.com/on/demandware.static/-/Library-Sites-TitleistSharedLibrary/default/v3ffde2ba963d11a21315130bd818bedc435a84ca/images/Gear/PLP-Subnav-Accessories.jpg?version=1,717,587,276,021">
          </div>
          <p>Accessories</p>
        </a>
        <a href="/golf-gear/golf-travel-gear/">
          <div class="principal-image active">
            <img alt="alt-placeholder" src="https://titleist.com/on/demandware.static/-/Library-Sites-TitleistSharedLibrary/default/v3ffde2ba963d11a21315130bd818bedc435a84ca/images/Gear/PLP-Subnav-TravelGear.jpg?version=1,717,587,322,778">
          </div>
          <p>Travel Gear</p>
        </a>
      </div>
      <div class="progressBar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    `;
  }

  var containerElement = document.querySelector(".refined-by-attributes");
  if (document.querySelectorAll("#test-xx").length == 0)
    containerElement.insertBefore(newElement, containerElement.firstChild);
}
