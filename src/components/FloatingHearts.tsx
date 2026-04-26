import React from 'react';
import './FloatingHearts.css'; // Make sure to create this CSS file for styling

const FloatingHearts = () => {
    const hearts = Array.from({ length: 20 }); // Create an array for hearts

    return (
        <div className="floating-hearts">
            {hearts.map((_, index) => (
                <span key={index} role="img" aria-label="heart" className="heart">❤️</span>
            ))}
        </div>
    );
};

export default FloatingHearts;