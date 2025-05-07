    // Animate progress bars on page load
window.addEventListener("load", () => {
    document.querySelectorAll(".progress-bar").forEach(bar => {
      const width = bar.getAttribute("data-width");
      bar.style.width = width;
    });
  });
  