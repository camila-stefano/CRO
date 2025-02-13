const fieldset = document.querySelector("#checkout-form fieldset");

const newElement = document.createElement("div");
newElement.classList.add("test-41");
newElement.innerHTML = `<a class="test-41-child cart-action-paypal button" href="https://www.titleist.com/on/demandware.store/Sites-titleist-Site/en_US/Paypal-StartExpressCheckoutFromCartFlow">
				<span>Pay with</span>
				<img src="/on/demandware.static/Sites-titleist-Site/-/default/dw7e39809d/images/mobile-cart-checkout-buttons.jpg">
			</a>
            <div class="container-top-pay-in-4">
      <p class="span-top-pay-in-4">
        Pay in 4 interest-free payments of $15.00 with
        <span>
          <img
            class="img-top-paypal"
            src="/on/demandware.static/Sites-titleist-Site/-/default/dwbcf95756/images/mobile-cart-checkout-buttons.jpg" /><img
            class="img-top-exclamation"
            src="https://i.imgur.com/o0fLz2U.png"
        /></span>
      </p>
    </div>
    `;
fieldset.appendChild(newElement);
