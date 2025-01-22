document.addEventListener("DOMContentLoaded", () => {
  const productsLink = document.querySelector(".products-content-mobile");
  const productsContainer = document.querySelector(
    ".products-mobile-container"
  );

  if (productsLink && productsContainer) {
    productsLink.addEventListener("click", (event) => {
      event.preventDefault();
      productsContainer.classList.toggle("display-block");
    });

    document.addEventListener("click", (event) => {
      if (
        !productsContainer.contains(event.target) &&
        !productsLink.contains(event.target)
      ) {
        productsContainer.classList.remove("display-block");
      }
    });
  }
});
