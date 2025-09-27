import React, { useEffect, useRef } from 'react';
import './PageTransition.css';

function PageTransition({ children }) {
  const ref = useRef();
  useEffect(() => {
    if (ref.current) {
      ref.current.classList.add('page-blur-in');
      const handler = () => ref.current.classList.remove('page-blur-in');
      ref.current.addEventListener('animationend', handler, { once: true });
      return () => ref.current && ref.current.removeEventListener('animationend', handler);
    }
  }, []);
  return (
    <div ref={ref} className="page-transition">
      {children}
    </div>
  );
}

export default PageTransition;
