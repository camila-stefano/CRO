function waitForElement(selector, callback) {
  const observer = new MutationObserver(() => {
    const elements = document.querySelectorAll(selector);
    if (elements.length > 0) {
      callback(elements[0]); // Pasa solo el primer elemento encontrado
      observer.disconnect();
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
}

waitForElement(".refinement-size", (refinementSizeParent) => {
  console.log("Refinement Padre ");

  const refinementSizeChildren = refinementSizeParent.children;
  console.log(refinementSizeChildren);

  const refinementSizeClone = refinementSizeChildren[1];
  console.log(refinementSizeClone);

  const refinementSizeCopy = refinementSizeClone.cloneNode(true);
  console.log(refinementSizeCopy);

  refinementSizeCopy.classList.add("sizes-clone");
  refinementSizeCopy.classList.add("refinements");

  const containerProducts = document.querySelector(".product-grid");
  if (containerProducts) {
    containerProducts.parentNode.insertBefore(
      refinementSizeCopy,
      containerProducts
    );
  }

  handleSmallDevices(refinementSizeCopy);
  window.addEventListener("resize", () =>
    handleSmallDevices(refinementSizeCopy)
  );
});

function handleSmallDevices(refinementSizeCopy) {
  const isMobile = window.innerWidth < 544;

  const sizesCloneUl = refinementSizeCopy.querySelector("ul");

  if (refinementSizeCopy && sizesCloneUl) {
    refinementSizeCopy.style.display = isMobile ? "flex" : "none";

    if (isMobile) {
      sizesCloneUl.style.display = "flex";
      sizesCloneUl.style.overflowX = "scroll";
      sizesCloneUl.style.flexWrap = "nowrap";
      sizesCloneUl.style.margin = "0";
      sizesCloneUl.style.padding = "0";
    } else {
      sizesCloneUl.style.overflowX = "";
      sizesCloneUl.style.flexWrap = "";
    }
  }
}
