import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Preloader: React.FC = () => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const [shouldRender, setShouldRender] = useState(true);
  const [isHidden, setIsHidden] = useState(false);
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    const onLoad = () => setDomLoaded(true);

    if (document.readyState === 'complete') {
      setDomLoaded(true);
    } else {
      window.addEventListener('load', onLoad);
    }

    return () => {
      window.removeEventListener('load', onLoad);
    };
  }, []);

  useEffect(() => {
    if (!h1Ref.current || !preloaderRef.current) return;
    if (!domLoaded) return;

    const h1 = h1Ref.current;

    const tl = gsap.timeline({
      defaults: { ease: 'power2.inOut', duration: 0.7 },
      onComplete: () => {
        setIsHidden(true);
      },
    });

    tl.to(h1, { fontSize: '1.25rem' });
    tl.to(h1, { top: '31px' });
    tl.to(h1, { left: '73px' });
  }, [domLoaded]);

  useEffect(() => {
    if (!preloaderRef.current) return;
    const el = preloaderRef.current;

    const handleTransitionEnd = () => {
      setShouldRender(false);
    };

    el.addEventListener('transitionend', handleTransitionEnd);
    return () => el.removeEventListener('transitionend', handleTransitionEnd);
  }, [isHidden]);

  if (!shouldRender) return null;

  return (
    <div
      ref={preloaderRef}
      className={`preloader ${isHidden ? 'opacity-0 pointer-events-none' : ''}`}
    >
      <h1 ref={h1Ref} className="preloader-title">
        Dieter Rams
      </h1>
    </div>
  );
};

export default Preloader;