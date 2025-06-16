import { useEffect, useRef } from 'react';
import '../styles/nav.css';

const EXPIRATION_MS = 60 * 60 * 1000; // 1h en ms

export default function Navigation() {
  const navRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // ---------- Leer la posición guardada ANTES del render ----------
  let initialX = 0;
  let initialY = 0;

  if (typeof window !== 'undefined') {
    const saved = sessionStorage.getItem('nav-position');
    if (saved) {
      try {
        const { x: sx = 0, y: sy = 0, ts = 0 } = JSON.parse(saved);
        if (Date.now() - ts < EXPIRATION_MS) {
          initialX = sx;
          initialY = sy;
        } else {
          sessionStorage.removeItem('nav-position');
        }
      } catch {
        console.warn('No se pudo parsear la posición del nav');
      }
    }
  }

  useEffect(() => {
    if (window.innerWidth < 1024) return;

    const el = navRef.current;
    const boundsEl = wrapperRef.current;
    if (!el || !boundsEl) return;

    import('gsap').then(async ({ default: gsap }) => {
      const { default: Draggable } = await import('gsap/Draggable');
      gsap.registerPlugin(Draggable);

      // Establecer posición inicial vía GSAP (por si hay cambios de layout)
      gsap.set(el, { x: initialX, y: initialY });

      // Crear draggable con límites
      Draggable.create(el, {
        type: 'x,y',
        bounds: boundsEl,
        inertia: true,
        edgeResistance: 0.85,
        dragClickables: true,
        allowNativeTouchScrolling: false,
        onPress() {
          window.dispatchEvent(new CustomEvent('nav-drag-start'));
        },
        onRelease() {
          window.dispatchEvent(new CustomEvent('nav-drag-end'));
        },
        onDragEnd() {
          sessionStorage.setItem(
            'nav-position',
            JSON.stringify({ x: this.x, y: this.y, ts: Date.now() })
          );
        }
      });

      // Centrar solo si no hay posición guardada
      const handleResize = () => {
        if (!sessionStorage.getItem('nav-position')) {
          const centerX = boundsEl.offsetWidth / 2 - el.offsetWidth / 2;
          const bottomY = boundsEl.offsetHeight - el.offsetHeight - 32;
          gsap.set(el, { x: centerX, y: bottomY });
        }
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    });
  }, []);

  return (
    <div className="nav-wrapper" ref={wrapperRef}>
      <div
        className="nav-container"
        ref={navRef}
        style={{
          transform: `translate(calc(-50% + ${initialX}px), ${initialY}px)`, // Posición inicial inline para evitar salto
        }}
      >
        <a href="/">Products</a>
        <a href="/awards">Awards</a>
        <a href="/bio">Bio</a>
        <div className="nav-handle">
          <span></span><span></span>
          <span></span><span></span>
        </div>
      </div>
    </div>
  );
}