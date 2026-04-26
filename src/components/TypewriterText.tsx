import React, { useEffect, useState } from 'react';

interface TypewriterTextProps {
    text: string;
    typingSpeed?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ text, typingSpeed = 100 }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            setDisplayedText((prev) => prev + text.charAt(index));
            index += 1;
            if (index === text.length) {
                clearInterval(intervalId);
            }
        }, typingSpeed);

        return () => clearInterval(intervalId);
    }, [text, typingSpeed]);

    return <div>{displayedText}</div>;
};

export default TypewriterText;