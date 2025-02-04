const cartContainer = document.querySelector(".cart-and-ipay");
const addToCartBtn = cartContainer.firstElementChild;
const wishlistBtn = document.querySelector(".c-product-details__wishlist-btn");
const wishlistSeparator = document.querySelector(
  ".c-product-details__ratings-and-wishlist__separator"
);
const reviews = document.querySelector(
  ".c-product-details__ratings-and-wishlist"
);

function handleSmallDevices() {
  const isMobile = window.innerWidth < 544;
  const isTabletMobile = window.innerWidth < 768;
  const isTablet = window.innerWidth < 1279;
  const isDesktop = window.innerWidth >= 1279;
  const isTabletOnly = window.innerWidth >= 544 && window.innerWidth < 1279;

  const heartBtn = document.querySelector(
    ".c-product-details__wishlist-btn__heart"
  );
  const element = document.querySelector(
    ".c-product-details__wishlist-btn__text.pl-1"
  );

  if (isDesktop) {
    reviews.insertAdjacentElement("beforeend", wishlistBtn);
    wishlistSeparator.style.display = "block";

    // Remove pseudo-element if it exists
    const existingPseudo = wishlistBtn.querySelector(".pseudo-element");
    if (existingPseudo) existingPseudo.remove();
  }

  if (isTablet) {
    cartContainer.insertAdjacentElement("beforeend", wishlistBtn);
    cartContainer.style.flexDirection = "column";
    addToCartBtn.classList.add("col-10");
    addToCartBtn.classList.remove("col-md");
    wishlistSeparator.style.display = "none";
    wishlistBtn.style.justifyContent = "center";
  }

  if (isTabletMobile) {
    wishlistBtn.style.justifyContent = "left";

    // Remove pseudo-element if it exists
    const existingPseudo = wishlistBtn.querySelector(".pseudo-element");
    if (existingPseudo) existingPseudo.remove();
  }

  if (isTabletOnly) {
    wishlistBtn.style.marginTop = "16px";
    // Add the equivalent of `::after` styling dynamically
    const pseudoElement = document.createElement("span");
    pseudoElement.style.content = "''";
    pseudoElement.style.position = "absolute";
    pseudoElement.style.top = "0";
    pseudoElement.style.left = "0";
    pseudoElement.style.width = "100%";
    pseudoElement.style.height = "100%";
    pseudoElement.style.background = "rgb(25, 115, 193)";
    pseudoElement.style.mixBlendMode = "color";

    // Ensure the parent element has relative positioning
    wishlistBtn.style.position = "relative";

    // Check if the pseudo-element is already added to avoid duplicates
    if (!wishlistBtn.querySelector(".pseudo-element")) {
      pseudoElement.classList.add("pseudo-element");
      wishlistBtn.appendChild(pseudoElement);
    }
  }

  if (isMobile) {
    cartContainer.className = "cart-and-ipay align-items-center flex-row";

    heartBtn.style.width = "2.5rem";
    heartBtn.style.height = "2.5rem";
    heartBtn.classList.add("m-0");

    element.style.display = "none";

    // Remove pseudo-element if it exists
    const existingPseudo = wishlistBtn.querySelector(".pseudo-element");
    if (existingPseudo) existingPseudo.remove();
  } else {
    cartContainer.className = "row cart-and-ipay";

    heartBtn.style.width = "2rem";
    heartBtn.style.height = "2rem";
    heartBtn.classList.remove("m-0");

    element.style.display = "";
  }
}

(() => handleSmallDevices())();
window.addEventListener("resize", () => handleSmallDevices());
