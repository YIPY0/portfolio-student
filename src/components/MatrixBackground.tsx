import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MatrixBackground: React.FC = () => {
    const [characters, setCharacters] = useState<string[]>([]);

    useEffect(() => {
        const generateCharacters = () => {
            const chars = [];
            for (let i = 0; i < 200; i++) {
                chars.push(
                    String.fromCharCode(Math.random() * (126 - 33) + 33)
                );
            }
            setCharacters(chars);
        };

        generateCharacters();
        const interval = setInterval(generateCharacters, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {characters.map((char, index) => (
                <motion.div
                    key={index}
                    initial={{ 
                        y: -50, 
                        opacity: 0,
                        x: Math.random() * window.innerWidth 
                    }}
                    animate={{ 
                        y: window.innerHeight + 50,
                        opacity: [0, 0.5, 0],
                        x: Math.random() * window.innerWidth
                    }}
                    transition={{
                        duration: Math.random() * 10 + 5,
                        repeat: Infinity,
                        repeatType: "loop"
                    }}
                    className="absolute text-green-500 text-xs opacity-30"
                >
                    {char}
                </motion.div>
            ))}
        </div>
    );
};

export default MatrixBackground;