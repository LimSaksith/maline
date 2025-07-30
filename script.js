<script>
// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll for internal links
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

  // Handle form submission with alert
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Thank you! We will contact you shortly.");
      form.reset(); // Optional: clears the form
    });
  }
});
</script>
