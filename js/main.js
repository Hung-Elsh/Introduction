// Animate skill bars on page load
window.addEventListener("load", () => {
  document.querySelectorAll(".skill-bar span[data-width]").forEach((bar) => {
    bar.style.width = bar.getAttribute("data-width");
  });
});
