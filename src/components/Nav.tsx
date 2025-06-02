import { useEffect, useRef } from 'react';
import '../styles/nav.css';

export default function Navigation() {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (navRef.current) {
      import('gsap/Draggable').then(({ default: Draggable }) => {
        import('gsap').then(({ default: gsap }) => {
          gsap.registerPlugin(Draggable);

          Draggable.create(navRef.current!, {
            type: 'x,y',
            bounds: window,
            inertia: true,
            edgeResistance: 0.85,
            dragClickables: true,
            allowNativeTouchScrolling: false,
          });
        });
      });
    }
  }, []);

  return (
    <div className="nav-container" ref={navRef}>
      <a href="/products">Products</a>
      <a href="/awards">Awards</a>
      <a href="/bio">Bio</a>
      <div className="nav-handle">
        <span></span><span></span>
        <span></span><span></span>
      </div>
    </div>
  );
}