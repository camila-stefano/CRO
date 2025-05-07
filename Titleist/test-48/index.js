function createElement() {
  const container = document.querySelectorAll(".product-image-container");
  const newElement = document.createElement("div");
  newElement.classList.add("container-test-48");

  if (container) {
    container.appendChild(newElement);
  }
}

const images = document.querySelectorAll(".thumb .product-image");
images.forEach((image) => {
  newElement.appendChild(image);
});
