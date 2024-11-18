getScript(
  "https://cdnjs.cloudflare.com/ajax/libs/flickity/3.0.0/flickity.pkgd.min.js",
  function () {
    try {
      var carousel = document.querySelector(".circ5 .carousel");
      console.log("🚀 ~ Flickity script loaded");
      var flkty = new Flickity(carousel, {
        on: {
          ready: function () {
            console.log("🚀 ~ Flickity is ready");
          },
          change: function (index) {
            console.log("🚀 ~ Slide changed to" + index);
          },
        },
        pageDots: false,
        // cellSelector: selectors$q.sliderItem,
        cellAlign: "left",
        groupCells: true,
        contain: true,
        adaptiveHeight: false,
        wrapAround: true,
      });
    } catch (e) {
      console.log({ e });
    }

    console.log("flickity initialized");
  }
);
