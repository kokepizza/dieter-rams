document.addEventListener('DOMContentLoaded', () => {
  if (window.matchMedia('(min-width: 1024px)').matches) {
    
    const timers = new WeakMap(); // almacenar los temporaizadores

    document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        if (card.classList.contains('active')) {

          clearTimeout(timers.get(card)); // si estaba activa → la desactivo y limpio el temporizador
          card.classList.remove('active');
          timers.delete(card);
        } else {

          card.classList.add('active'); // primera pasada → la activo y programo su desactivación
          const id = setTimeout(() => {
            card.classList.remove('active');
            timers.delete(card);
          }, 3000);
          timers.set(card, id);
        }
      });
    });
  }
});