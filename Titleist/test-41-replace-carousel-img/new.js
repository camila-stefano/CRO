function waitForElements(selector, callback) {
  const observer = new MutationObserver(() => {
    const elements = document.querySelectorAll(selector);

    if (elements.length > 0) {
      callback(elements);
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

waitForElements(".principal-image img", function (images) {
  images.forEach((image) => {
    const imageSrc = image.currentSrc || image.src;

    console.log(imageSrc, "$$$ CURRENT SRC");

    if (
      imageSrc ===
      "https://titleist.com/on/demandware.static/-/Library-Sites-TitleistSharedLibrary/default/v3ffde2ba963d11a21315130bd818bedc435a84ca/images/Gear/PLP-Subnav-Adjustable.jpg?version=1,717,587,485,266"
    ) {
      console.log("$$$ Imagen ADJUSTABLE encontrada, reemplazando...");
      image.src = "https://i.imgur.com/ZCyZaON.jpeg";
    } else if (
      imageSrc ===
      "https://www.titleist.com/on/demandware.static/-/Library-Sites-TitleistSharedLibrary/default/v3ffde2ba963d11a21315130bd818bedc435a84ca/images/Gear/PLP-Subnav-Women.jpg?version=1,717,587,525,563"
    ) {
      console.log("$$$ Imagen WOMEN HATS encontrada, reemplazando...");
      image.src = "https://i.imgur.com/xvRHjRx.jpeg";
    } else if (
      imageSrc ===
      "https://www.titleist.com/on/demandware.static/-/Library-Sites-TitleistSharedLibrary/default/v3ffde2ba963d11a21315130bd818bedc435a84ca/images/Gear/PLP-Subnav-Stand-Bags.jpg?version=1,717,533,018,180"
    ) {
      console.log("$$$ Imagen STAND BAGS encontrada, reemplazando...");
      image.src = "https://i.imgur.com/Rnx2QE2.jpeg";
    }
  });
});
