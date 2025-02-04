function waitForElement(selector, callback) {
  const observer = new MutationObserver(() => {
    const elements = document.querySelectorAll(selector);
    if (elements.length > 0) {
      callback(elements);
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

function waitForSpecificElement(selector, parentSelector, callback) {
  const observer = new MutationObserver(() => {
    const elements = document.querySelectorAll(selector);
    if (elements.length > 0) {
      callback(elements);
    }
  });

  observer.observe(document.querySelector(parentSelector), {
    childList: true,
    subtree: false,
  });
}

waitForElement(".color-attribute", function (colorAttributes) {
  const containerElement = document.querySelector(
    ".c-search-refinements__refinement__values--swatches"
  );

  const liElements = document.querySelectorAll(
    ".c-search-refinements__refinement__values--swatches li"
  );

  colorAttributes.forEach((colorAttribute) => {
    const button = colorAttribute.querySelector("button");
    if (button && !colorAttribute.querySelector("p")) {
      const dataValue = button.getAttribute("data-value");
      const colorName = document.createElement("p");
      colorName.textContent = dataValue;

      colorAttribute.appendChild(colorName);
      colorName.style.fontSize = "15px";
      colorName.style.display = "flex";
      colorName.style.justifyContent = "center";
      colorName.style.maxWidth = "3rem";
      colorName.style.textAlign = "center";
      colorName.style.margin = "0";
      colorName.style.paddingTop = "3px";
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
      containerElement.style.flexWrap = "wrap";
    } else if (isDesktop) {
      containerElement.style.display = "grid";
      containerElement.style.gridTemplateColumns = "repeat(4, 1fr)";
      containerElement.style.gap = "8px 18px";
      containerElement.style.justifyItems = "center";
      containerElement.style.marginLeft = "0px";
      containerElement.style.marginRight = "0px";

      if (containerElement.firstElementChild) {
        containerElement.firstElementChild.style.display = "flex";
        containerElement.firstElementChild.style.flexDirection = "column";
      }

      liElements.forEach((liElement) => {
        liElement.style.display = "flex";
        liElement.style.flexDirection = "column";
        liElement.style.alignItems = "center";
        liElement.style.minHeight = "88px";
      });
    }
  }

  (() => handleSmallDevices())();
  window.addEventListener("resize", () => handleSmallDevices());
});

function observeFilterChanges() {
  const filterBar = document.querySelector(".filter-bar");

  if (!filterBar) return;

  const observer = new MutationObserver(() => {
    console.log("Detectado cambio en la página, ejecutando función...");
    waitForSpecificElement(".filter-value", ".filter-bar", processFilters);
  });

  observer.observe(filterBar, { childList: true, subtree: true });
}

function processFilters(pill) {
  pill.forEach((filterValue) => {
    const swatchFilter = filterValue.querySelector(".swatch-filter");

    if (!swatchFilter) return;

    const button = filterValue.querySelector("button");
    const circle = filterValue.querySelector(".swatch-filter");

    if (button) {
      const colorValue = button.getAttribute("data-value");
      console.log(filterValue, "colorValue", colorValue);

      if (filterValue.children[1].classList.contains("filter-value__pill")) {
        return;
      }

      const nameSpan = document.createElement("span");
      nameSpan.classList.add("filter-value__pill");
      nameSpan.textContent = colorValue;

      filterValue.insertBefore(nameSpan, button);

      filterValue.style.display = "flex";
      filterValue.style.alignItems = "center";
      filterValue.style.gap = "5px";
      filterValue.style.paddingLeft = "10px";
      filterValue.style.paddingRight = "16px";

      circle.style.position = "static";
      circle.style.margin = "0px";
      circle.style.padding = "0px";

      button.style.padding = "0px";
      button.style.position = "relative";
      button.style.right = "-2rem";
      button.style.top = "-1px";

      nameSpan.style.fontSize = "15px";
    }
  });
}

// Ejecutar la función en la carga inicial y observar cambios
waitForSpecificElement(".filter-value", ".filter-bar", processFilters);
observeFilterChanges();
