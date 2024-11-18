const parent = document.querySelectorAll(".product-grid-item");

parent.forEach((item) => {

const productItems = parent.forEach((item) => {
  const productImage = item.querySelector(".product-grid-item__image");
  const productRatingCount = item.firstChild;
  const productTitle = item.querySelector(".product-grid-item__title");
  const productVendor = item.querySelector(".product__vendor");
  const productPrice = item.querySelector(".product-grid-item__price");
  const productRating = item.querySelector(".product-grid-item__rating");

  if (
    productImage &&
    productTitle &&
    productVendor &&
    productPrice &&
    productRating
  ) {
    item.innerHTML = "";

    item.appendChild(productImage);
    item.appendChild(productTitle);
    item.appendChild(productVendor);
    item.appendChild(productPrice);
    item.appendChild(productRating);
    item.appendChild(productRatingCount);
  }
});

const parent = document.querySelectorAll(".product-grid-item");

parent.forEach((item) => {
  const productInfo = item.querySelector(".product-grid-item__info"); 

  if (productInfo) {
    const learnMoreButton = document.createElement('a');
    learnMoreButton.className = 'btn btn--primary btn--small btn--white';
    learnMoreButton.setAttribute('tabindex', '0');
    learnMoreButton.setAttribute('href', '/collections/');
    learnMoreButton.innerHTML = '<span class="visually-hidden">View More</span>Learn More';

    productInfo.appendChild(learnMoreButton);
  }
});


getScript('https://cdnjs.cloudflare.com/ajax/libs/flickity/3.0.0/flickity.pkgd.min.js', function(){
  try {
      var carousel = document.querySelector('.circ5 .carousel');
      var flkty = new Flickity(carousel, {
          on: {
  ready: function() {
    console.log('test: Flickity is ready');
  },
  change: function( index ) {
    console.log('test: Slide changed to' + index );
  }},
          pageDots: false,
          // cellSelector: selectors$q.sliderItem,
          cellAlign: 'left',
          groupCells: true,
          contain: true,
          adaptiveHeight: false,
          wrapAround: true
      });
  } catch (e) {
      console.log({e})
  }

  console.log('flickity initialized');
});