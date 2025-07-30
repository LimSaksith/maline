// Smooth scroll effect for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// Handle form submission alert
document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Thank you! We will contact you shortly.");
});
