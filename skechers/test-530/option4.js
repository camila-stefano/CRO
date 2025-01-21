handleSmallDevices();
window.addEventListener("resize", handleSmallDevices);
window.addEventListener("load", handleSmallDevices);

function handleSmallDevices() {
  const isMobile = window.innerWidth < 544;

  const refinementSizeParent = document.querySelector(".refinement-size");
  console.log(refinementSizeParent);

  const refinementSizeChildren = refinementSizeParent.children;
  console.log(refinementSizeChildren);

  const refinementSizeClone = refinementSizeChildren[1];

  console.log(refinementSizeClone);

  let refinementSizeCopy = refinementSizeClone.cloneNode(true);
  console.log("Refinement Size Copy", refinementSizeCopy);

  refinementSizeCopy.classList.add("sizes-clone");
  refinementSizeCopy.classList.add("refinements");

  //const filteredChildrenItems = Array.from(refinementSizeCopy.children).filter(element => element.classList.contains("refinement-size"));

  // refinementSizeCopy.replaceChildren(...filteredChildrenItems);

  const containerProducts = document.querySelector(".product-grid");
  if (containerProducts) {
    containerProducts.parentNode.insertBefore(
      refinementSizeCopy,
      containerProducts
    );
  }

  const sizesClone = document.querySelector(".sizes-clone");
  const sizesCloneUl = sizesClone.querySelector("ul");
  console.log("Sizes clone", sizesClone);

  if (sizesClone) {
    sizesClone.style.display = isMobile ? "flex" : "none";
  }
}
