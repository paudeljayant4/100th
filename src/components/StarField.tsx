import React, { useEffect, useRef } from 'react';
import './StarField.css';

const StarField = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let stars = [];

        const createStars = (num) => {
            for (let i = 0; i < num; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 2,
                    alpha: Math.random()
                });
            }
        };

        const updateStars = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            stars.forEach(star => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha}`;
                ctx.fill();
                star.alpha = Math.random();
            });
            requestAnimationFrame(updateStars);
        };

        createStars(100);
        updateStars();
    }, []);

    return <canvas ref={canvasRef} width={800} height={600} />;
};

export default StarField;