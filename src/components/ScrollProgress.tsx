import React, { useEffect, useState } from 'react';

const ScrollProgress = () => {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / windowHeight) * 100;
        setScrollY(scrollPercent);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            height: '10px',
            width: `${scrollY}%`,
            background: 'linear-gradient(to right, #4caf50, #81c784)',
            transition: 'width 0.1s ease-in-out',
            zIndex: 1000
        }} />
    );
};

export default ScrollProgress;
