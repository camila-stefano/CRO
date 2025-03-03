(function () {
  var origOpen = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function () {
    this.addEventListener("load", function () {
      //console.log(this.responseURL);
      if (this.responseURL.indexOf("Product-Variation") > -1) {
        setTimeout(setVideoThumb, 500, this.responseURL);
      }
    });
    origOpen.apply(this, arguments);
  };
})();

function setVideoThumb(url) {
  var videoIconThumb = document.querySelector(
    ".product-thumbnails .thumb .video-thumb-icon"
  );
  if (videoIconThumb != null) {
    videoIconThumb.src =
      "//media.titleist.com/images/titleist/files/US/icons/icon-thumb-video-red.svg";
  }
  var videoReplaceThumbUrl = "";
  var currentUrl = window.location.href.toLowerCase();
  //console.log('url = ' + url + ' current url' + window.location.href.toLowerCase());

  if (
    currentUrl.indexOf("product/players-4-carbon/25tbsx5") > -1 ||
    currentUrl.indexOf("product/players-4-carbon/tb25sx5") > -1
  ) {
    var sideImageThumb = document.querySelector(
      ".product-thumbnails .carousel .thumb:nth-child(4) .productthumbnail"
    );
    if (sideImageThumb != null) {
      videoReplaceThumbUrl = sideImageThumb.src;
    }
  } else if (
    currentUrl.indexOf("/product/tour-performance/25thatp") > -1 ||
    currentUrl.indexOf("/product/tour-performance/th25atp") > -1
  ) {
    if (url.toLowerCase().indexOf("chrwht") > -1) {
      videoReplaceThumbUrl =
        "https://acushnet.scene7.com/is/image/titleist/2025-Tour-Performance-Charcoal-White-TH25ATP-0C1-11-Large?wid=800&fmt=png-alpha";
    } else if (url.toLowerCase().indexOf("blkwht") > -1) {
      videoReplaceThumbUrl =
        "https://acushnet.scene7.com/is/image/titleist/2025-Tour-Performance-Black-White-11-Large?wid=800&fmt=png-alpha";
    }
  } else if (
    currentUrl.indexOf("/product/tour-performance-mesh/25thatpm") > -1 ||
    currentUrl.indexOf("/product/tour-performance-mesh/th25atpm") > -1
  ) {
    if (url == "" || url.toLowerCase().indexOf("blkwht") > -1) {
      videoReplaceThumbUrl =
        "https://acushnet.scene7.com/is/image/titleist/2025-Tour-Performance-Mesh-Black-White-11-Large?wid=800&fmt=png-alpha";
    } else if (url.toLowerCase().indexOf("chrwht") > -1) {
      videoReplaceThumbUrl =
        "https://acushnet.scene7.com/is/image/titleist/2025-Tour-Performance-Mesh-Charcoal-White-TH25ATPM-0C1-11-Large?wid=800&fmt=png-alpha";
    } else if (url.toLowerCase().indexOf("nvywht") > -1) {
      videoReplaceThumbUrl =
        "https://acushnet.scene7.com/is/image/titleist/2025-Tour-Performance-Mesh-Navy-White-11-Large?wid=800&fmt=png-alpha";
    }
  } else if (
    currentUrl.indexOf("/product/laguna/25thalg") > -1 ||
    currentUrl.indexOf("/product/laguna/th25alg") > -1
  ) {
    if (url == "" || url.toLowerCase().indexOf("wht") > -1) {
      videoReplaceThumbUrl =
        "https://acushnet.scene7.com/is/image/titleist/2025-Laguna-White-11-Large?wid=800&fmt=png-alpha";
    } else if (url.toLowerCase().indexOf("nvy") > -1) {
      videoReplaceThumbUrl =
        "https://acushnet.scene7.com/is/image/titleist/2025-Laguna-Navy-11-Large?wid=800&fmt=png-alpha";
    } else if (url.toLowerCase().indexOf("blk") > -1) {
      videoReplaceThumbUrl =
        "https://acushnet.scene7.com/is/image/titleist/2025-Laguna-Black-11-Large?wid=800&fmt=png-alpha";
    }
  }

  var videoProductThumb =
    videoIconThumb.parentNode.querySelector(".productthumbnail");
  if (videoProductThumb != null) {
    if (videoReplaceThumbUrl != "") {
      videoProductThumb.src = videoReplaceThumbUrl;
    }
  }
}

setVideoThumb("");
