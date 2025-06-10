document.addEventListener('DOMContentLoaded', () => {
  if (!window.matchMedia('(min-width: 1024px)').matches) return;

  const dot = document.createElement('div');
  dot.className = 'cursor-dot';
  document.body.appendChild(dot);

  document.addEventListener('mousemove', e => {
    dot.style.left = e.clientX + 'px';
    dot.style.top  = e.clientY + 'px';

    const el = document.elementFromPoint(e.clientX, e.clientY);
    if (el && (el.tagName === 'A' || el.tagName === 'BUTTON')) {
      dot.classList.add('hovered');
    } else {
      dot.classList.remove('hovered');
    }
  });

  document.body.style.cursor = 'none';
});