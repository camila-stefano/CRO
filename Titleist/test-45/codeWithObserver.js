function waitForElement(selector, callback) {
  const observer = new MutationObserver((mutationsList, obs) => {
    const element = document.querySelector(selector);
    if (element) {
      obs.disconnect();
      callback(element);
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

function updatePaymentsInfo(orderValueElement) {
  if (!orderValueElement) return;

  const orderValue = Number(orderValueElement.textContent.trim());
  if (isNaN(orderValue)) return;

  const paymentsValue = (orderValue / 4).toFixed(2);

  const spanElement = document.querySelector(".payments-value");
  if (spanElement) {
    spanElement.textContent = `$${paymentsValue}`;
  }

  const fieldset = document.querySelector("#checkout-form fieldset");
  if (!fieldset) return;

  let newElement = document.querySelector(".test-41");
  if (!newElement) {
    newElement = document.createElement("div");
    newElement.classList.add("test-41");
    fieldset.appendChild(newElement);
  }

  newElement.innerHTML = `
      <a class="test-41-child cart-action-paypal button" 
         href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Paypal-StartExpressCheckoutFromCartFlow">
        <span>Pay with</span>
        <img src="/on/demandware.static/Sites-titleist-Site/-/default/dw7e39809d/images/mobile-cart-checkout-buttons.jpg">
      </a>
      <div class="container-top-pay-in-4">
        <p class="span-top-pay-in-4">
          Pay in 4 interest-free payments of <span>$${paymentsValue}</span> with
          <span>
            <img class="img-top-paypal" src="/on/demandware.static/Sites-titleist-Site/-/default/dwbcf95756/images/mobile-cart-checkout-buttons.jpg">
          </span>
        </p>
      </div>
    `;
}

waitForElement(".order-value", updatePaymentsInfo);

const targetElement = document.querySelector(".order-value");
if (targetElement) {
  const observer = new MutationObserver(() =>
    updatePaymentsInfo(targetElement)
  );
  observer.observe(targetElement, {
    childList: true,
    subtree: true,
    characterData: true,
  });
}
