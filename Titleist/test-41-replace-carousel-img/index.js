(function () {
  try {
    function waitForjQuery(trigger, delayInterval, delayTimeout) {
      var intervalForjQuery = setInterval(function () {
        if (typeof window.jQuery != "undefined") {
          clearInterval(intervalForjQuery);
          trigger();
        }
      }, delayInterval);
    }

    function waitForElement(selector, trigger, delayInterval, delayTimeout) {
      var interval = setInterval(function () {
        if (
          document &&
          document.querySelector(selector) &&
          document.querySelectorAll(selector).length > 0
        ) {
          clearInterval(interval);
          trigger();
        }
      }, delayInterval);
      setTimeout(function () {
        clearInterval(interval);
      }, delayTimeout);
    }

    function addHTML() {
      var newElement = document.createElement("div");

      if (document.location.pathname === "/golf-gear/golf-hats/") {
        newElement.innerHTML = `
      <div id="test-xx">
        <p>Shop by style</p>
        <div class="testSlider">
          <a href="/golf-gear/golf-hats/adjustable-hats/">
            <div class="principal-image active">
              <img alt="alt-placeholder" src="https://i.imgur.com/ZCyZaON.jpeg">
            </div>
            <p>Adjustable</p>
          </a>
          <a href="/golf-gear/golf-hats/fitted-hats/">
            <div class="principal-image active">
              <img alt="alt-placeholder" src="https://development-na.titleist.com/on/demandware.static/-/Library-Sites-TitleistSharedLibrary/default/v3ffde2ba963d11a21315130bd818bedc435a84ca/images/Gear/PLP-Subnav-Fitted.jpg?version=1,717,587,506,351">
            </div>
            <p>Fitted</p>
          </a>
          <a href="/golf-gear/golf-hats/elements-hats/">
            <div class="principal-image active">
              <img alt="alt-placeholder" src="https://development-na.titleist.com/on/demandware.static/-/Library-Sites-TitleistSharedLibrary/default/vaa355f1160fb7d0cb17fc2f99259e695fe0a3a3d/images/Gear/PLP-Subnav-Elements2.jpg?version=1,717,700,574,155">
            </div>
            <p>Elements</p>
          </a>
          <a href="/golf-gear/golf-hats/juniors-hats/">
            <div class="principal-image active">
              <img alt="alt-placeholder" src="https://development-na.titleist.com/on/demandware.static/-/Library-Sites-TitleistSharedLibrary/default/v3ffde2ba963d11a21315130bd818bedc435a84ca/images/Gear/PLP-Subnav-Junior.jpg?version=1,717,587,519,052">
            </div>
            <p>Junior</p>
          </a>
          <a href="/golf-gear/golf-hats/womens-hats/">
            <div class="principal-image active">
              <img alt="alt-placeholder" src="https://i.imgur.com/xvRHjRx.jpeg">
            </div>
            <p>Women</p>
          </a>
        </div>
          <div class="progressBar" role="progressbar" aria-valuemin="0" aria-valuemax="100">
        </div>
      </div>
      `;
      } else if (document.location.pathname === "/golf-gear/golf-bags/") {
        newElement.innerHTML = `
      <div id="test-xx">
        <p>Shop by style</p>
        <div class="testSlider">
          <a href="/golf-gear/golf-bags/tour-bags/">
            <div class="principal-image active">
              <img alt="alt-placeholder" src="https://development-na.titleist.com/on/demandware.static/-/Library-Sites-TitleistSharedLibrary/default/v3ffde2ba963d11a21315130bd818bedc435a84ca/images/Gear/PLP-Subnav-Tour-Bags.jpg?version=1,717,533,058,510">
            </div>
            <p>Tour Bags</p>
          </a>
          <a href="/golf-gear/golf-bags/stand-bags/">
            <div class="principal-image active">
              <img alt="alt-placeholder" src="https://i.imgur.com/Rnx2QE2.jpeg">
            </div>
            <p>Stand Bags</p>
          </a>
          <a href="/golf-gear/golf-bags/hybrid-stand-bags/">
            <div class="principal-image active">
              <img alt="alt-placeholder" src="https://i.imgur.com/bG2fVoK.jpeg">
            </div>
            <p>Hybrid Bags</p>
          </a>
          <a href="/golf-gear/golf-bags/cart-bags/">
            <div class="principal-image active">
              <img alt="alt-placeholder" src="https://i.imgur.com/KUJJZNf.jpeg">
            </div>
            <p>Cart Bags</p>
          </a>
          <a href="/golf-gear/golf-bags/carry-bags/">
            <div class="principal-image active">
              <img alt="alt-placeholder" src="https://development-na.titleist.com/on/demandware.static/-/Library-Sites-TitleistSharedLibrary/default/v3ffde2ba963d11a21315130bd818bedc435a84ca/images/Gear/PLP-Subnav-Carry-Bags.jpg?version=1,717,532,661,392">
            </div>
            <p>Carry Bags</p>
          </a>
          <a href="/golf-gear/golf-bags/linkslegend/">
            <div class="principal-image active">
              <img alt="alt-placeholder" src="https://i.imgur.com/TBgdziz.jpeg">
            </div>
            <p>LinksLegend</p>
          </a>
        </div>
          <div class="progressBar" role="progressbar" aria-valuemin="0" aria-valuemax="100">
        </div>
      </div>
      `;
      } else if (document.location.pathname === "/golf-gear/") {
        newElement.innerHTML = `
      <div id="test-xx">
        <p>Shop by Category</p>
        <div class="testSlider">
          <a href="/golf-gear/golf-bags/">
            <div class="principal-image active">
              <img alt="alt-placeholder" src="https://i.imgur.com/Rnx2QE2.jpeg">
            </div>
            <p>Golf Bags</p>
          </a>
          <a href="/golf-gear/golf-hats/">
            <div class="principal-image active">
              <img alt="alt-placeholder" src="https://i.imgur.com/30uXQdl.jpeg">
            </div>
            <p>Headwear</p>
          </a>
          <a href="/golf-gear/golf-gloves/">
            <div class="principal-image active">
              <img alt="alt-placeholder" src="https://development-na.titleist.com/on/demandware.static/-/Library-Sites-TitleistSharedLibrary/default/v3ffde2ba963d11a21315130bd818bedc435a84ca/images/Gear/PLP-Subnav-Gloves.jpg?version=1,717,587,284,309">
            </div>
            <p>Gloves</p>
          </a>
          <a href="/golf-gear/golf-headcovers/">
            <div class="principal-image active">
              <img alt="alt-placeholder" src="https://development-na.titleist.com/on/demandware.static/-/Library-Sites-TitleistSharedLibrary/default/v3ffde2ba963d11a21315130bd818bedc435a84ca/images/Gear/PLP-Subnav-Headcovers.jpg?version=1,717,587,307,971">
            </div>
            <p>Headcovers</p>
          </a>
          <a href="/golf-gear/golf-accessories/">
            <div class="principal-image active">
              <img alt="alt-placeholder" src="https://development-na.titleist.com/on/demandware.static/-/Library-Sites-TitleistSharedLibrary/default/v3ffde2ba963d11a21315130bd818bedc435a84ca/images/Gear/PLP-Subnav-Accessories.jpg?version=1,717,587,276,021">
            </div>
            <p>Accessories</p>
          </a>
          <a href="/golf-gear/golf-travel-gear/">
            <div class="principal-image active">
              <img alt="alt-placeholder" src="https://development-na.titleist.com/on/demandware.static/-/Library-Sites-TitleistSharedLibrary/default/v3ffde2ba963d11a21315130bd818bedc435a84ca/images/Gear/PLP-Subnav-TravelGear.jpg?version=1,717,587,322,778">
            </div>
            <p>Travel Gear</p>
          </a>
          <a href="/golf-gear/new/">
            <div class="principal-image active">
              <img alt="alt-placeholder" src="https://i.imgur.com/8lK6rHP.jpeg">
            </div>
            <p>New Gear Arrivals</p>
          </a>
        </div>
        <div class="progressBar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      `;
      }

      var containerElement = document.querySelector(".refined-by-attributes");
      if (document.querySelectorAll("#test-xx").length == 0)
        containerElement.insertBefore(newElement, containerElement.firstChild);
    }

    function addSlider() {
      var $slider = $(".testSlider");
      var $progressBar = $(".progressBar");

      $slider.on(
        "beforeChange",
        function (event, slick, currentSlide, nextSlide) {
          var calc =
            ((nextSlide + slick.options.slidesToShow) / slick.slideCount) * 100;

          $progressBar
            .css("background-size", calc + "% 100%")
            .attr("aria-valuenow", calc);
        }
      );

      $slider.slick({
        slidesToShow: 4.5,
        slidesToScroll: 1,
        infinite: false,
        arrow: true,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 1550,
            settings: {
              slidesToShow: 3.5,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3.5,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1.15,
              slidesToScroll: 1,
            },
          },
        ],
      });

      /*
      $(".testSlider a").hover(
        function () {
          $(this).find("p").css("color", "#e32338");
          $(this).find(".principal-image").removeClass("active");
          $(this).find(".secondary-image").addClass("active");
        },
        function () {
          $(this).find("p").css("color", "#000");
          $(this).find(".principal-image").addClass("active");
          $(this).find(".secondary-image").removeClass("active");
        }
      );*/
    }

    function init() {
      addHTML();
      waitForElement("#test-xx", addSlider, 100, 15000);

      var targetNode = document.getElementById("main");
      observer.observe(targetNode, observerConfig);
    }

    var observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.addedNodes.length > 0) {
          addHTML();
          addSlider();
        }
      });
    });

    var observerConfig = {
      childList: true,
    };

    waitForElement(
      "#search-results-main",
      function () {
        waitForjQuery(init, 50, 15000);
        //console.log('exp executed');
      },
      50,
      15000
    );
  } catch (e) {
    if (debug) console.log(e, "error in Test" + variation_name);
  }
})();
