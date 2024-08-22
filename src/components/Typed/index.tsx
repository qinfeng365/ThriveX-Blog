"use client"

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default () => {
    // Create reference to store the DOM element containing the animation
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
            typeSpeed: 100,
            backSpeed: 30,
            loop: true
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);

    return (
        <div className="App">
            <span ref={el} />
        </div>
    );
}