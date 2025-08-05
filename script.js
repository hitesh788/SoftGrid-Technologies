
document.addEventListener("DOMContentLoaded", () => {
  // --- POPUP CLOSE ---
  function closePopup() {
    const popup = document.querySelector('.popup-overlay');
    popup.style.animation = 'fadeOut 0.3s ease-out forwards';
    setTimeout(() => {
      popup.style.display = 'none';
    }, 300);
  }
  window.closePopup = closePopup;

  // --- FADEOUT ANIMATION STYLE ---
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeOut {
      from { opacity: 1; }
      to { opacity: 0; }
    }
  `;
  document.head.appendChild(style);

  // --- POPUP SHOW ON LOAD ---
  const popup = document.querySelector('.popup-overlay');
  if (popup) popup.style.display = 'flex';

  // --- FORM SUBMIT BUTTON ---
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      const button = this.querySelector('button[type="submit"]');
      const originalText = button.innerHTML;
      button.innerHTML = '⏳ Registering...';
      button.disabled = true;

      setTimeout(() => {
        button.innerHTML = originalText;
        button.disabled = false;
      }, 3000);
    });
  }

  // --- FILTER BUTTONS ---
  const filterButtons = document.querySelectorAll(".filter-button");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const filter = button.getAttribute("data-filter");

      projectCards.forEach(card => {
        const category = card.getAttribute("data-category");
        if (filter === "all" || category === filter) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });
});
