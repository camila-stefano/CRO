convert.$(document).ready(function () {
  const getTrendingsElements = () => {
    const trendingColors = {
      "23TH21": ["Navy/White", "White/Navy"],
      "24THTEFB": ["Navy/White", "Charcoal/White"],
      "25THATP": ["Red/White", "White/Navy"],
      "25THATPM": ["Blue Bird/White", "Charcoal/White"],
      "23TH20": ["Black/White", "Navy/White"],
      "25THATR": ["White/Navy/Red", "White/Soft Pink"],
      "23TH22": ["Navy/White", "Vintage Blue/White"],
      "25THVTP": ["Blue Bird/White", "White/Navy/Red"],
      "24THTA": ["White/Black", "Blue Bird/Navy"],
      "24THPT": ["Black/White", "Navy/White"],
      "24THPCV": ["Black/White", "Navy/White"],
      "25THAPBM": ["Charcoal/White", "Hunter/White"],
      "24THMA": ["White/Black", "Black/Black"],
      "25THAMTLW": ["Black/White", "Blue Bird/White"],
      "24THCB": ["Burgundy/Navy/White", "Grey/Black/White"],
      "23TH08": ["Washed Indigo/White", "Black/Camo"],
      "23TH16": ["Black/White", "White/Navy/Red"],
      "23TH11": ["Eucalyptus/Lemon", "White/Soft Pink/Burgundy"],
      "24THSC": ["Burgundy/Black/White", "Navy/Navy/White"],
      "25THALG": ["Navy"],
      "25THAWTP": ["Lemon/Marble/White", "Marble/Soft Pink/White"],
      "25THAWPBM": ["Blue Bird/Washed Indigo/White", "Charcoal/Lemon"],
      "23TH24": ["Washed Indigo/Bluebird/White"],
      "24THWCB": ["White", "Navy"],
      "23TH30": ["White/Black", "White/Soft Pink/Marble"],
      "25THAJRTP": ["Blue Bird/Navy", "Eucalyptus/White"],
      "23TH12": ["White/Blue Bird/Soft Pink", "White/Washed Indigo/Gray"],
      "22TH07": ["Blue Bird/White", "White/Black"],
      "22TH06": ["Blue Bird/White/Washed Indigo"],
      "24THTETF": ["Charcoal/White", "Navy/White"],
      "23TGB05": ["Navy", "Grey/Graphite"],
      "25TBSX5": ["Black", "Black/Black/Red"],
      "23TGB06": ["Black", "Sand/Navy"],
      "23TGB04": ["White/Navy", "Navy/White/Red"], // only one color featured since Navy/Red is not listed
      "047GB1T": ["Navy/Grey", "White/Black/Grey"],
      "048GB1T": ["Black/Black/Red", "White/Black"],
      "22TGB02": ["Black", "Navy"],
      "22TGB01": ["White/Black/Grey", "Charcoal/Graphite/Black"],
      "23TGB07": ["Black/Black/Red"],
      "23TGB03": ["Baltic/Cool Gray"],
    };

    const getCode = () => {
      const url = window.location.href;
      const params = url.split("/");
      const lastParam = params[params.length - 1];
      const code = lastParam.split(".")[0];
      return code;
    };

    const getTrendingCodes = () => {
      const mainSKU = getCode();
      theCode = mainSKU;
      return trendingColors[mainSKU] || [];
    };

    const trending = getTrendingCodes();

    const swatches =
      theCode === "LL23GB19"
        ? document.querySelectorAll(".configurator-form .configurator-option")
        : document.querySelectorAll('.swatches a[title^="Select Color: "]');

    const matchingAnchors =
      theCode === "LL23GB19"
        ? Array.from(swatches).filter((anchor) => {
            const input = anchor.querySelector("input");
            const color = input.getAttribute("data-label");
            return trending.includes(color);
          })
        : Array.from(swatches).filter((anchor) => {
            const title = anchor.getAttribute("title");
            const color = title.replace("Select Color: ", "").trim();
            return trending.includes(color);
          });

    return matchingAnchors;
  };

  function waitForElement(selector, callback) {
    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        observer.disconnect();
        callback();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  const getTheDiv = () => {
    let clss =
      window.innerWidth > 992
        ? ".product-section .promotion"
        : ".product-col-2.product-detail";
    if (theCode === "LL23GB19") {
      clss =
        window.innerWidth > 992
          ? ".product-section.d-lg-block .product-main-info .promotion"
          : ".product-col-2.product-detail";
    }
    return clss;
  };

  const addSelectedToNew = (prevLi) => {
    const lis = document.querySelectorAll(".test-49 .selectable");
    lis &&
      [...lis].forEach((li) => {
        const newLink =
          theCode === "LL23GB19"
            ? li.querySelector("input")
            : li.querySelector("a");
        const lgimg =
          theCode === "LL23GB19"
            ? newLink.getAttribute("data-label")
            : newLink.getAttribute("data-lgimg");
        const prevLink =
          theCode === "LL23GB19"
            ? prevLi.querySelector("input")
            : prevLi.querySelector("a");
        const prevLgimg =
          theCode === "LL23GB19"
            ? prevLink.getAttribute("data-label")
            : prevLink.getAttribute("data-lgimg");
        lgimg === prevLgimg && prevLi.classList.contains("selected")
          ? li.classList.add("selected")
          : li.classList.remove("selected");
      });
  };

  const actionNewSectionSpecial = () => {
    const els = document.querySelectorAll(".test-49 .config-option-label img");
    els.forEach((el) => {
      el.addEventListener("click", () => {
        const parent = document.querySelector(
          ".test-49 .config-option-label"
        ).parentNode;
        const input = parent.querySelector("input");
        input.checked = true;
        const grandparent = parent.parentNode;
        grandparent.classList.add("selected");
      });
    });
  };

  const deleteFromPrevious = () => {
    const grandParentToLookUp = document.querySelector(
      ".swatches.color.must-select"
    );
    const parents =
      grandParentToLookUp && grandParentToLookUp.querySelectorAll("li");

    parents &&
      parents.length > 0 &&
      parents.forEach((li) => {
        const anchor = li.querySelector("a");
        if (!anchor) return;

        const anchorLgimg = anchor.getAttribute("data-lgimg");

        elements.forEach((element) => {
          const elementLgimg = element.getAttribute("data-lgimg");

          if (anchorLgimg === elementLgimg) {
            li.classList.contains("selected") && addSelectedToNew(li);
            li.remove();
          }
        });
      });

    if (window.innerWidth < 992 && theCode === "LL23GB19") {
      actionNewSectionSpecial();
    }
  };

  const hideDiv = (div) => {
    div.style.visibility = "hidden";
  };

  const deleteFromPreviousException = () => {
    const grandParentToLookUp = document.querySelector(
      ".configurator-form.configurator-color"
    );
    const parents =
      grandParentToLookUp &&
      grandParentToLookUp.querySelectorAll(".configurator-option");

    parents &&
      parents.length > 0 &&
      parents.forEach((div) => {
        const input = div.querySelector("input");
        if (!input) return;

        const dataLabel = input.getAttribute("data-label");

        elements.forEach((element) => {
          const elementInput = element.querySelector("input");
          const elementDataLabel = elementInput.getAttribute("data-label");

          if (dataLabel === elementDataLabel) {
            div.classList.contains("selected") && addSelectedToNew(div);
            window.innerWidth > 992 && div.remove();
          }
        });
      });
  };

  const createNewSection = () => {
    const divOriginal = document.querySelector(`${getTheDiv()}`);

    if (!divOriginal) return;

    let newElement = document.querySelector(".test-49");

    if (!newElement) {
      newElement = document.createElement("div");
      newElement.classList.add("test-49");
      divOriginal.appendChild(newElement);
    }

    newElement.innerHTML = `
         <div class="product-trendings" data-attributes="{}">
        <ul>
          <li class="attribute">
            <div class="label">Trending Colors</div>
            <div class="value">
              <ul class="swatches color">
                ${elements
                  .map(
                    (element) => `
                  <li class="selectable">
                    ${element.outerHTML}
                  </li>
                `
                  )
                  .join("")}
              </ul>
            </div>
          </li>
        </ul>
      </div>
      `;
  };

  const actionAllLis = () => {
    const allLis = document.querySelectorAll(".selectable a");
    [...allLis].forEach((li) => {
      li.addEventListener("click", removeSelected);
    });

    const allDivs = document.querySelectorAll(".configurator-option");
    [...allDivs].forEach((div) => {
      div.addEventListener("click", removeSelected());
    });
  };

  const removeSelected = () => {
    const selectedFeatured = document.querySelector(".test-49 .selected");
    selectedFeatured && selectedFeatured.classList.remove("selected");
  };

  let theCode;
  const elements = getTrendingsElements();
  waitForElement(".product-variations", createNewSection);
  theCode === "LL23GB19" ? deleteFromPreviousException() : deleteFromPrevious();

  window.addEventListener("resize", () => {
    const existing = document.querySelector(".test-49");
    if (existing) existing.remove();
    createNewSection();
    theCode === "LL23GB19"
      ? deleteFromPreviousException()
      : deleteFromPrevious();
    if (window.innerWidth < 992 && theCode === "LL23GB19") {
      actionNewSectionSpecial();
    }
  });

  const newSectionObserver = new MutationObserver(() => {
    if (!document.querySelector(".test-49")) {
      createNewSection();
    }
    window.innerWidth < 992 &&
      document.querySelector(".test-49 .selected") &&
      actionAllLis();
    theCode === "LL23GB19"
      ? deleteFromPreviousException()
      : deleteFromPrevious();
    if (window.innerWidth < 992 && theCode === "LL23GB19") {
      actionNewSectionSpecial();
    }
  });

  newSectionObserver.observe(document.body, { childList: true, subtree: true });
});
