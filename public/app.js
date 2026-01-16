// Nozzle Nest - static site buy buttons
// Works for any button with class="buy-button"

const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/test_XXXXXXXX"; // Replace later with LIVE link

document.addEventListener("click", (e) => {
  const buyBtn = e.target.closest(".buy-button");
  if (!buyBtn) return;

  window.location.href = STRIPE_PAYMENT_LINK;
});
