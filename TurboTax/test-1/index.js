const variantContainer = document.querySelector(".test-1-container");

const newVariantElement = document.createElement("div");
newVariantElement.classList.add("test-1-container");
newVariantElement.innerHTML = `
  <div class="test-1-container-card">
      <div class="test-1-container-card-text">
        <h3 class="title">File Your Own Taxes</h3>
        <h3 class="subtitle">
          Just answer simple questions, and we’ll guide you through filing your
          taxes.
        </h3>
      </div>
      <div class="test-1-container-card-button">
        <a
          type="button"
          href="https://myturbotax.intuit.com/sign-up?cid=soc_blog_button_file"
          target="_self"
          class="wp-block-button__link wp-element-button"
          ><span>Get started</span></a
        >
      </div>
      <div class="test-1-container-card-link">
        <a
          class=""
          href="https://turbotax.intuit.com/personal-taxes/online/file-your-own-taxes/"
          ><span class="">See how TurboTax works</span></a
        >
      </div>
    </div>
`;

variantContainer.appendChild(newVariantElement);
