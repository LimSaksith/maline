<script>
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });

    const bookForm = document.querySelector('#book form');
    if (bookForm) {
      bookForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = bookForm.querySelector('input[placeholder="Name"]').value.trim();
        const phone = bookForm.querySelector('input[placeholder="Phone Number"]').value.trim();
        const gender = bookForm.querySelector('select').value;

        if (!name || !phone || !gender) {
          alert("Please fill out all fields.");
          return;
        }

        alert(`Thank you, ${name}! We received your booking.\nPhone: ${phone}\nGender: ${gender}`);
        bookForm.reset();
      });
    }
  });
</script>
