function waitForElement(selector, callback) {
  const observer = new MutationObserver(() => {
    const element = document.querySelector(selector);
    if (element) {
      observer.disconnect();
      callback(element);
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
}
waitForElement(".navbar-nav", (navbarElement) => {
  navbarElement.style.display = "none";
  const newNavbarElement = document.querySelector(".menu");
  if (newNavbarElement) {
    const newElement = document.createElement("div");
    newElement.className = "test-navbar-container";
    newElement.innerHTML = `
    <ul class="navbar-nav tier-1 align-items-lg-center" id="navbar-tier-1">
    <li class="dropdown">
      <a href="#">Products <img src="https://i.imgur.com/k0YTfvx.png" alt="dropdown-arrow" class="dropdown-arrow"></a>
      <ul class="dropdown-menu">
        <li><a href="#">Proactive Support <img src="https://i.imgur.com/k0YTfvx.png" alt="dropdown-arrow" class="dropdown-arrow"></a></a></li>
        <li><a href="#">View All Products <img src="https://i.imgur.com/k0YTfvx.png" alt="dropdown-arrow" class="dropdown-arrow"></a></a></li>
      </ul>
    </li>
    <li class="nav-item ">
            <a href="/pages/ingredients" class="nav-link">Ingredients</a>
          </li>
    <li class="nav-item ">
            <a href="/pages/meet-the-team" class="nav-link">Our Story</a>
          </li>
    <li class="nav-item ">
            <a href="/collections/products#quiz" class="nav-link">Quiz</a>
          </li>
    <li class="nav-item ">
            <a href="https://uqora.com/pages/uqora-reviews" class="nav-link">Reviews ⭐</a>
          </li>
    <li class="nav-item ">
            <a href="https://uqora.info" class="nav-link">UTI Education</a>
          </li>
    <li class="nav-item ">
            <a href="https://uqora.com/a/faqs" class="nav-link">FAQs</a>
          </li><hr class="accent"><li class="nav-item d-lg-none"><a href="https://uqora.com/tools/recurring/get-subscription-access" class="nav-link" role="link" tabindex="0">Login</a></li><li class="nav-item d-lg-none"><a href="/pages/contact-us" class="nav-link" role="link" tabindex="0">Contact us</a></li></ul>
            `;
    newNavbarElement.appendChild(newElement);
  }
});
