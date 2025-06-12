document.addEventListener('DOMContentLoaded', () => {
  if (!window.matchMedia('(min-width: 1024px)').matches) return;

  const dot = document.createElement('div');
  dot.className = 'cursor-dot';
  document.body.appendChild(dot);

  let mouseX = 0;
  let mouseY = 0;
  let dotX = 0;
  let dotY = 0;

  const lerp = (start, end, factor) => start + (end - start) * factor;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    const el = document.elementFromPoint(mouseX, mouseY);
    if (
      el &&
      (el.closest('.hover-target') ||
       el.closest('a') ||
       el.closest('button'))
    ) {
      dot.classList.add('hovered');
    } else {
      dot.classList.remove('hovered');
    }
  });

  function animate() {
    dotX = lerp(dotX, mouseX, 0.35);
    dotY = lerp(dotY, mouseY, 0.35);
    dot.style.left = `${dotX}px`;
    dot.style.top = `${dotY}px`;

    requestAnimationFrame(animate);
  }

  animate();

  document.body.style.cursor = 'none';
});