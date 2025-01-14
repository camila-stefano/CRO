function waitForElement(selector, callback) {
  const observer = new MutationObserver(() => {
    const elements = document.querySelectorAll(selector);
    if (elements.length > 0) {
      callback(elements);
      observer.disconnect(); // Detener el observador una vez encontrado
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
}

waitForElement(
  ".c-search-refinements__refinement__values--sizes",
  (refinementSizes) => {
    const refinementSize = refinementSizes[0];
    if (!refinementSize) return;

    const sizesClone = refinementSize.cloneNode(true);

    sizesClone.classList.add("sizes-clone");

    const productGrid = document.querySelector(".product-grid");
    if (productGrid) {
      productGrid.parentNode.insertBefore(sizesClone, productGrid);
    }

    handleSmallDevices();
    window.addEventListener("resize", handleSmallDevices);
  }
);

function handleSmallDevices() {
  const isMobile = window.innerWidth < 544;

  const sizesClone = document.querySelector(".sizes-clone");

  if (sizesClone) {
    sizesClone.style.display = isMobile ? "flex" : "none";

    // Agregar estilos adicionales si es necesario
    if (isMobile) {
      sizesClone.style.overflowX = "scroll";
      sizesClone.style.flexWrap = "nowrap";
      sizesClone.style.margin = "0";
      sizesClone.style.padding = "0";
    } else {
      sizesClone.style.overflowX = "";
      sizesClone.style.flexWrap = "";
    }
  }
}
