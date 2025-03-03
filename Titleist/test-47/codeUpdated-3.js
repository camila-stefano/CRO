convert.$(document).ready(function () {
  function defer(method) {
    if (window.jQuery) {
      method();
    } else {
      setTimeout(function () {
        defer(method);
      }, 50);
    }
  }

  try {
    function init() {
      //debugger;
      var src = $(
        ".product-image-container .regular.slider .product-image:nth-of-type(3)"
      ).data("src")
        ? $(
            ".product-image-container .regular.slider .product-image:nth-of-type(3)"
          ).data("src")
        : $(
            ".product-image-container .regular.slider .slick-slide:nth-of-type(3) .product-image img"
          ).data("src");
      src = src.replaceAll("650", "1200");
      $(
        "#pdpMain > div.product-core-info > div.product-col-1.product-image-container-outer > div > div.product-primary-image > div > div > div > div:nth-child(3) > div"
      )
        .css("background", "url(" + src + ")")
        .css("height", $(".slick-slide.first-thumb").outerHeight() + "px");

      $("#thumbnails > div > div > div > div:nth-child(3) img").attr(
        "src",
        $("#thumbnails > div > div > div > div:nth-child(3) img")
          .attr("src")
          .replaceAll("=89", "=289")
      );

      $(window).on("resize", function () {
        var src = $(
          ".product-image-container .regular.slider .product-image:nth-of-type(3)"
        ).data("src")
          ? $(
              ".product-image-container .regular.slider .product-image:nth-of-type(3)"
            ).data("src")
          : $(
              ".product-image-container .regular.slider .slick-slide:nth-of-type(3) .product-image img"
            ).data("src");
        src = src.replaceAll("650", "1200");
        $(
          "#pdpMain > div.product-core-info > div.product-col-1.product-image-container-outer > div > div.product-primary-image > div > div > div > div:nth-child(3) > div"
        )
          .css("background", "url(" + src + ")")
          .css("height", $(".slick-slide.first-thumb").outerHeight() + "px");
      });
    }

    function waitForImage(imgElem) {
      return new Promise((res) => {
        if (imgElem.complete) {
          return res();
        }
        imgElem.onload = () => res();
        imgElem.onerror = () => res();
      });
    }

    defer(function () {
      if (window.interval1690408791953) {
        clearInterval(window.interval1690408791953);
      }
      window.interval1690408791953 = setInterval(function () {
        if (
          document.querySelectorAll(
            ".product-image-container .regular.slider .product-image:nth-of-type(3)"
          ).length ||
          document.querySelectorAll(
            ".product-image-container .regular.slider .slick-slide:nth-of-type(3) .product-image img"
          ).length
        ) {
          init();
          const targetNode = document.getElementById("pdpMain");

          const config = { attributes: true, childList: true, subtree: true };

          const callback = (mutationList, observer) => {
            for (const mutation of mutationList) {
              if (
                mutation.type === "childList" &&
                mutation.addedNodes.length > 0 &&
                mutation.target.className === "slick-list draggable"
              ) {
                //debugger;
                console.log(
                  "A child node has been added or removed.",
                  mutation
                );
                var src = $(
                  ".product-image-container .regular.slider .product-image:nth-of-type(3)"
                ).data("src")
                  ? $(
                      ".product-image-container .regular.slider .product-image:nth-of-type(3)"
                    ).data("src")
                  : $(
                      ".product-image-container .regular.slider .slick-slide:nth-of-type(3) .product-image img"
                    ).data("src");
                src = src.replaceAll("650", "1200");

                if (window.interval1323232323553) {
                  clearInterval(window.interval1323232323553);
                }
                window.interval1323232323553 = setInterval(function () {
                  if (
                    $(".product-primary-image .slick-track").outerHeight() > 100
                  ) {
                    $(
                      "#pdpMain > div.product-core-info > div.product-col-1.product-image-container-outer > div > div.product-primary-image > div > div > div > div:nth-child(3) > div"
                    )
                      .css("background", "url(" + src + ")")
                      .css(
                        "height",
                        $(".product-primary-image .slick-track").outerHeight() +
                          "px"
                      );

                    clearInterval(window.interval1323232323553);
                  }
                }, 50);

                $("#thumbnails > div > div > div > div:nth-child(3) img").attr(
                  "src",
                  $("#thumbnails > div > div > div > div:nth-child(3) img")
                    .attr("src")
                    .replaceAll("=89", "=289")
                );
                /*if(convert._$("#pdpMain > div.product-core-info > div.product-col-1.product-image-container-outer > div > div.product-primary-image > div > div > div > div:nth-child(3) > div > img").attr("src")) {
                      debugger;
                        convert._$("#pdpMain > div.product-core-info > div.product-col-1.product-image-container-outer > div > div.product-primary-image > div > div > div > div:nth-child(3) > div").css("background", "url("+convert._$("#pdpMain > div.product-core-info > div.product-col-1.product-image-container-outer > div > div.product-primary-image > div > div > div > div:nth-child(3) > div > img").attr("src")+")");
                        }*/
              }
            }
          };

          // Create an observer instance linked to the callback function
          const observer = new MutationObserver(callback);

          // Start observing the target node for configured mutations
          observer.observe(targetNode, config);
          clearInterval(window.interval1690408791953);
        }
      }, 50);
    });
  } catch (e) {
    console.log("error in test ", e);
  }
});
