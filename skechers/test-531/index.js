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
  console.log(containerElement);
  const colorAttributes = document.querySelectorAll(".color-attribute");

  containerElement.style.display = "grid";
  containerElement.style.gridTemplateColumns = "repeat(4, 1fr)";
  containerElement.style.gap = "8px 18px";

  colorAttributes.forEach((colorAttribute) => {
    const button = colorAttribute.querySelector("button");
    if (button) {
      const dataValue = button.getAttribute("data-value");

      const colorName = document.createElement("p");
      colorName.textContent = dataValue;

      colorAttribute.appendChild(colorName);
    }
  });
});
