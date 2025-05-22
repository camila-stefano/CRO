function waitForElement(selector, callback) {
  // Si ya existe en el DOM, ejecutamos el callback inmediatamente
  if (document.querySelector(selector)) {
    callback();
    return;
  }

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (node.nodeType === 1 && node.matches(selector)) {
          callback();
          observer.disconnect();
          return;
        }
      }
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

function findSkus() {
  const productos = [...document.querySelectorAll("[data-url]")].slice(0, 50);
  const skus = productos.map((el) => {
    const dataUrl = el.getAttribute("data-url");
    const url = new URL(dataUrl, window.location.origin);
    return url.searchParams.get("pid"); // SKU o Product ID
  });

  console.log(skus, "SKU found");
}

waitForElement(".product-image .thumb-link", findSkus);
