function waitForElement(selector, callback) {
  const observer = new MutationObserver((mutations) => {
    if (document.querySelector(selector)) {
      observer.disconnect();
      callback();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

waitForElement(".color-attribute", function () {
  const containerElement = document.querySelector(
    ".c-search-refinements__refinement__values--swatches"
  );

  const colorAttributes = document.querySelectorAll(".color-attribute");

  const liElements = document.querySelectorAll(
    ".c-search-refinements__refinement__values--swatches li"
  );

  colorAttributes.forEach((colorAttribute) => {
    const button = colorAttribute.querySelector("button");
    if (button) {
      const dataValue = button.getAttribute("data-value");
      const colorName = document.createElement("p");
      colorName.textContent = dataValue;

      colorAttribute.appendChild(colorName);
      colorName.style.fontSize = "15px";
      colorName.style.display = "flex";
      colorName.style.justifyContent = "center";
      colorName.style.maxWidth = "4rem";
      colorName.style.textAlign = "center";
    }
  });

  function handleSmallDevices() {
    const isMobile = window.innerWidth < 544;
    const isTablet = window.innerWidth < 1279;
    const isDesktop = window.innerWidth >= 1279;

    if (isMobile) {
      containerElement.style.display = "grid";
      containerElement.style.gridTemplateColumns = "repeat(5, 1fr)";
      containerElement.style.gap = "0px 0px";
      containerElement.style.justifyItems = "center";
    } else if (isTablet) {
      containerElement.style.display = "flex";
      containerElement.style.gap = "8px 12px";
      containerElement.style.flexwrap = "wrap";
    } else if (isDesktop) {
      containerElement.style.display = "grid";
      containerElement.style.gridTemplateColumns = "repeat(4, 1fr)";
      containerElement.style.gap = "8px 20px";
      containerElement.style.justifyItems = "center";
      containerElement.firstElementChild.style.display = "flex";
      containerElement.firstElementChild.style.flexDirection = "column";

      liElements.forEach((liElement) => {
        liElement.style.display = "flex";
        liElement.style.flexDirection = "column";
        liElement.style.alignItems = "center";
      });
    }
  }

  (() => handleSmallDevices())();
  window.addEventListener("resize", () => handleSmallDevices());
});