const refinementSizeValues = document.querySelector(
  ".c-search-refinements__refinement__values--sizes "
);

const refinementSizeCopy = refinementSizeValues.cloneNode(true);

const containerProducts = document.querySelector(".product-grid");

const sizeBlock = `
  <div class="refinements sizes-clone"">
    ${refinementSizeCopy.innerHTML}
  </div>
  `;

if (containerProducts) {
  containerProducts.insertAdjacentHTML("beforebegin", sizeBlock);
}

// Removing extra elements

const clone = document.querySelector(".sizes-clone");

const arrayOfChildren = Array.from(refinementSizeCopy.children).filter(
  (child) => child.classList.contains("refinement-size")
);

clone.replaceChildren(...arrayOfChildren);

handleSmallDevices();
window.addEventListener("resize", handleSmallDevices);

function handleSmallDevices() {
  const isMobile = window.innerWidth < 544;

  const sizesClone = document.querySelector(".sizes-clone");
  const sizesCloneUl = refinementSizeCopy.querySelector("ul");

  if (sizesClone) {
    //sizesClone.style.display = isMobile ? "flex" : "none";
    sizesClone.style.display = "flex";

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
