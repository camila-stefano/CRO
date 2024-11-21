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

  const heartBtn = document.querySelector(
    ".c-product-details__wishlist-btn__heart"
  );
  const element = document.querySelector(
    ".c-product-details__wishlist-btn__text.pl-1"
  );

  if (isDesktop) {
    reviews.insertAdjacentElement("beforeend", wishlistBtn);
    wishlistSeparator.style.display = "block";
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
  }

  if (isMobile) {
    cartContainer.className = "cart-and-ipay align-items-center flex-row";

    heartBtn.style.width = "2.5rem";
    heartBtn.style.height = "2.5rem";
    heartBtn.classList.add("m-0");

    element.style.display = "none";
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
