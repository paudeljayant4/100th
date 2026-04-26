import React, { useEffect, useRef } from 'react';

const CursorTrail = () => {
  const trailRef = useRef<HTMLSpanElement[]>([]);
  const heartsCount = 10;

  useEffect(() => {
    // Create heart elements
    for (let i = 0; i < heartsCount; i++) {
      const span = document.createElement('span');
      span.innerText = '❤️';
      span.style.position = 'absolute';
      span.style.pointerEvents = 'none';
      span.style.transition = 'transform 0.5s, opacity 0.5s';
      span.style.opacity = '0';
      document.body.appendChild(span);
      trailRef.current.push(span);
    }

    const handleMouseMove = (event: MouseEvent) => {
      const x = event.clientX;
      const y = event.clientY;
      trailRef.current.forEach((heart, index) => {
        setTimeout(() => {
          heart.style.transform = `translate(${x}px, ${y}px)`;
          heart.style.opacity = '1';
        }, index * 100);
        setTimeout(() => {
          heart.style.opacity = '0';
        }, index * 300);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      trailRef.current.forEach(heart => heart.remove());
    };
  }, []);

  return null;
};

export default CursorTrail;
