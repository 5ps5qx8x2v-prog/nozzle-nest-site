document.addEventListener("click", (e) => {
  const button = e.target.closest("button");
  if (!button) return;

  if (button.textContent.toLowerCase().includes("buy")) {
    window.location.href = "https://buy.stripe.com/test_4gMeVd9i781q1jW3455ZC00";
  }
});
