'use client';

import { useState, useEffect } from 'react';
import './styles.css';

export default function Switch() {
    const [darkMode, setDarkMode] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);

        if (typeof window !== 'undefined') {
            const savedDarkMode = localStorage.getItem('darkMode');
            if (savedDarkMode !== null) {
                setDarkMode(JSON.parse(savedDarkMode));
            }
        }
    }, []);

    useEffect(() => {
        if (isClient) {
            if (darkMode) {
                document.body.classList.add('dark-mode');
            } else {
                document.body.classList.remove('dark-mode');
            }
            localStorage.setItem('darkMode', JSON.stringify(darkMode));
        }
    }, [darkMode, isClient]);

    const toggleDarkMode = () => {
        setDarkMode((curr) => !curr);
    };

    return (
        <label className="switch">
            <input 
                type="checkbox" 
                checked={darkMode}
                onChange={toggleDarkMode}
            />
            <span className="slider"></span>
        </label>
    );
}
