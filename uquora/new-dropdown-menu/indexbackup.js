document.addEventListener("DOMContentLoaded", () => {
  /*  Navbar mobile functionality */
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector("#mainNavbarCollapse");
  navbarToggler.addEventListener("click", () => {
    navbarCollapse.classList.toggle("collapse");
    navbarToggler.classList.toggle("collapsed");
    const isExpanded = navbarToggler.getAttribute("aria-expanded") === "true";
    navbarToggler.setAttribute("aria-expanded", isExpanded ? "true" : "false");
  });
  /* Mobile products  */
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
