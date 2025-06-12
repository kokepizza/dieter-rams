import { useEffect, useRef } from 'react';
import '../styles/nav.css';

const EXPIRATION_MS = 60 * 60 * 1000; // 1h en ms

export default function Navigation() {
  const navRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth < 1024) return;

    // Limpia la posición sólo al comienzo de la sesión
    if (!sessionStorage.getItem('session-started')) {
      sessionStorage.setItem('session-started', 'true');
      localStorage.removeItem('nav-position');
    }

    const el = navRef.current;
    const boundsEl = wrapperRef.current;
    if (!el || !boundsEl) return;

    import('gsap').then(async ({ default: gsap }) => {
      const { default: Draggable } = await import('gsap/Draggable');
      gsap.registerPlugin(Draggable);

      // ---------- leer posición guardada ----------
      let x = 0;
      let y = 0;

      const saved = localStorage.getItem('nav-position');
      if (saved) {
        try {
          const { x: sx = 0, y: sy = 0, ts = 0 } = JSON.parse(saved);
          // Sólo usamos la posición si no ha expirado
          if (Date.now() - ts < EXPIRATION_MS) {
            x = sx;
            y = sy;
          } else {
            localStorage.removeItem('nav-position');
          }
        } catch {
          console.warn('No se pudo parsear la posición del nav');
        }
      }

      gsap.set(el, { x, y });

      // ---------- Draggable ----------
      Draggable.create(el, {
        type: 'x,y',
        bounds: boundsEl,
        inertia: true,
        edgeResistance: 0.85,
        dragClickables: true,
        allowNativeTouchScrolling: false,
        onDragEnd() {
          localStorage.setItem(
            'nav-position',
            JSON.stringify({ x: this.x, y: this.y, ts: Date.now() })
          );
        }
      });

      // ---------- centrar al redimensionar si no hay posición ----------
      const handleResize = () => {
        if (!localStorage.getItem('nav-position')) {
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
      <div className="nav-container" ref={navRef}>
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