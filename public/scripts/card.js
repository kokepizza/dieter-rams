document.addEventListener('DOMContentLoaded', () => {
  if (window.matchMedia('(min-width: 1024px)').matches) {
    document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('mouseenter', () =>
        card.classList.toggle('active')
      );
    });
  }
});