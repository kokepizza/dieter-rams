import { useEffect, useRef } from 'react';
import '../styles/nav.css';

export default function Navigation() {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elmnt = navRef.current;
    if (!elmnt) return;

    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    const dragMouseDown = (e: MouseEvent | TouchEvent) => {
      e.preventDefault();
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      pos3 = clientX;
      pos4 = clientY;

      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
      document.ontouchend = closeDragElement;
      document.ontouchmove = elementDrag;
    };

    const elementDrag = (e: MouseEvent | TouchEvent) => {
      e.preventDefault();
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      pos1 = pos3 - clientX;
      pos2 = pos4 - clientY;
      pos3 = clientX;
      pos4 = clientY;

      elmnt.style.top = (elmnt.offsetTop - pos2) + 'px';
      elmnt.style.left = (elmnt.offsetLeft - pos1) + 'px';
    };

    const closeDragElement = () => {
      document.onmouseup = null;
      document.onmousemove = null;
      document.ontouchend = null;
      document.ontouchmove = null;
    };

    elmnt.onmousedown = dragMouseDown;
    elmnt.ontouchstart = dragMouseDown;

    return () => {
      elmnt.onmousedown = null;
      elmnt.ontouchstart = null;
    };
  }, []);

  return (
    <div className="nav-container" ref={navRef} style={{
      position: 'absolute',
      top: '200px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 10
    }}>
      <a href="/">Products</a>
      <a href="/awards">Awards</a>
      <a href="/bio">Bio</a>
      <div className="nav-handle">
        <span></span><span></span><span></span><span></span>
      </div>
    </div>
  );
}