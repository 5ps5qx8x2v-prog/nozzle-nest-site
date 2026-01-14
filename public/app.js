// Nozzle Nest - Buy button handler (Stripe Payment Link)

const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/test_4gMeVd9i781q1jw3455ZC00";


function goToCheckout() {
  window.location.href = STRIPE_PAYMENT_LINK;
}

document.addEventListener("DOMContentLoaded", () => {
  // Footer year (optional, but keeps your existing feature working)
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Buy buttons
  const buy1 = document.getElementById("buyBtn");
  const buy2 = document.getElementById("buyBtn2");

  if (buy1) buy1.addEventListener("click", goToCheckout);
  if (buy2) buy2.addEventListener("click", goToCheckout);
});
