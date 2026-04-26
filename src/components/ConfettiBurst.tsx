import React from 'react';
import { useEffect } from 'react';

const ConfettiBurst = () => {
  useEffect(() => {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    const pieces = 120;
    const colors = ['#FF0', '#0F0', '#00F', '#F00', '#0FF', '#F0F'];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const confettiPieces = Array.from({ length: pieces }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      color: colors[Math.floor(Math.random() * colors.length)],
      radius: Math.random() * 5 + 5,
      fallSpeed: Math.random() * 3 + 2,
      angle: Math.random() * Math.PI * 2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      confettiPieces.forEach(piece => {
        ctx.beginPath();
        ctx.arc(piece.x, piece.y, piece.radius, 0, Math.PI * 2);
        ctx.fillStyle = piece.color;
        ctx.fill();

        piece.y += piece.fallSpeed;
        piece.x += Math.sin(piece.angle) * piece.fallSpeed;
        if (piece.y > canvas.height) piece.y = 0;
        if (piece.x > canvas.width) piece.x = 0;
        if (piece.x < 0) piece.x = canvas.width;
      });
      requestAnimationFrame(draw);
    };
    draw();
  }, []);

  return <canvas id='confetti-canvas'></canvas>;
};

export default ConfettiBurst;
