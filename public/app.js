console.log("app.js loaded");

// Temporary: confirm the button click is being detected
document.addEventListener("click", (e) => {
  const btn = e.target.closest("button, a");
  if (btn && /buy/i.test(btn.textContent || "")) {
    alert("Buy button click detected (JS is working). Next we add the Stripe link.");
  }
});
