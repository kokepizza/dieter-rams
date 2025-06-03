import { useEffect, useRef } from 'react';
import '../styles/nav.css';

export default function Navigation() {
  const navRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ⚠️ Si no hay sesión iniciada, borramos la posición
    if (!sessionStorage.getItem('session-started')) {
      sessionStorage.setItem('session-started', 'true');
      localStorage.removeItem('nav-position');
    }

    const el = navRef.current;
    const boundsEl = wrapperRef.current;
    if (!el || !boundsEl) return;

    import('gsap').then(({ default: gsap }) => {
      import('gsap/Draggable').then(({ default: Draggable }) => {
        gsap.registerPlugin(Draggable);

        // Cargar posición guardada
        const saved = localStorage.getItem('nav-position');
        let x = 0;
        let y = 0;

        if (saved) {
          try {
            const pos = JSON.parse(saved);
            x = pos.x || 0;
            y = pos.y || 0;
          } catch {
            console.warn('No se pudo parsear la posición del nav');
          }
        } else {
          // Centrar abajo por defecto
          x = boundsEl.offsetWidth / 2 - el.offsetWidth / 2;
          y = boundsEl.offsetHeight - el.offsetHeight - 32;
        }

        gsap.set(el, { x, y });

        Draggable.create(el, {
          type: 'x,y',
          bounds: boundsEl,
          inertia: true,
          edgeResistance: 0.85,
          dragClickables: true,
          allowNativeTouchScrolling: false,
          onDragEnd: function () {
            localStorage.setItem(
              'nav-position',
              JSON.stringify({ x: this.x, y: this.y })
            );
          }
        });

        const handleResize = () => {
          // Si no hay posición guardada, recentrar
          if (!localStorage.getItem('nav-position')) {
            const centerX = boundsEl.offsetWidth / 2 - el.offsetWidth / 2;
            const bottomY = boundsEl.offsetHeight - el.offsetHeight - 32;
            gsap.set(el, { x: centerX, y: bottomY });
          }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      });
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