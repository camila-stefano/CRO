const refinementSizeParent = document.querySelector(".refinement-size");
console.log(refinementSizeParent);

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

handleSmallDevices();
window.addEventListener("resize", handleSmallDevices);

function handleSmallDevices() {
  const isMobile = window.innerWidth < 544;

  const sizesClone = document.querySelector(".sizes-clone");
  const sizesCloneUl = refinementSizeCopy.querySelector("ul");

  if (sizesClone) {
    sizesClone.style.display = isMobile ? "flex" : "none";

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
