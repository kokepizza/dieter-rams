import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!window.matchMedia('(min-width: 1024px)').matches) return;

    const dot = dotRef.current;
    if (!dot) return;

    const lerp = (start: number, end: number, t: number) => start + (end - start) * t;

    const move = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (el?.closest('.hover-target, a, button')) {
        dot.classList.add('hovered');
      } else {
        dot.classList.remove('hovered');
      }
    };

    const loop = () => {
      pos.current.x = lerp(pos.current.x, mouse.current.x, 0.3);
      pos.current.y = lerp(pos.current.y, mouse.current.y, 0.3);
      dot.style.left = `${pos.current.x}px`;
      dot.style.top = `${pos.current.y}px`;
      requestAnimationFrame(loop);
    };

    document.addEventListener('mousemove', move);
    document.body.style.cursor = 'none';
    loop();

    return () => {
      document.removeEventListener('mousemove', move);
      document.body.style.cursor = '';
    };
  }, []);

  return <div className="cursor-dot" ref={dotRef}></div>;
}