function waitForElements(selector, callback) {
  const observer = new MutationObserver(() => {
    callback(document.querySelectorAll(selector));
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["src"],
  });
}

const replacements = {
  "https://titleist.com/on/demandware.static/-/Library-Sites-TitleistSharedLibrary/default/v3ffde2ba963d11a21315130bd818bedc435a84ca/images/Gear/PLP-Subnav-Adjustable.jpg?version=1,717,587,485,266":
    "https://i.imgur.com/ZCyZaON.jpeg",
  "https://www.titleist.com/on/demandware.static/-/Library-Sites-TitleistSharedLibrary/default/v3ffde2ba963d11a21315130bd818bedc435a84ca/images/Gear/PLP-Subnav-Women.jpg?version=1,717,587,525,563":
    "https://i.imgur.com/xvRHjRx.jpeg",
  "https://www.titleist.com/on/demandware.static/-/Library-Sites-TitleistSharedLibrary/default/v3ffde2ba963d11a21315130bd818bedc435a84ca/images/Gear/PLP-Subnav-Stand-Bags.jpg?version=1,717,533,018,180":
    "https://i.imgur.com/Rnx2QE2.jpeg",
};

function replaceImages(images) {
  images.forEach((image) => {
    const originalSrc = image.currentSrc || image.src;
    const newSrc = replacements[originalSrc];

    if (newSrc && image.src !== newSrc) {
      console.log(`$$$ Imagen encontrada (${originalSrc}), reemplazando...`);
      image.src = newSrc + "?t=" + Date.now(); // Forzar recarga
    }
  });
}

// Ejecutar en imágenes ya cargadas
replaceImages(document.querySelectorAll(".principal-image img"));

// Observar nuevas imágenes y cambios en src
waitForElements(".principal-image img", replaceImages);
