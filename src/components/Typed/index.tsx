"use client"

import { useEffect, useRef } from 'react';
import { useConfigStore } from '@/stores'
import Typed from 'typed.js';

export default ({ className }: { className?: string }) => {
    const { theme } = useConfigStore()

    const el = useRef(null);

    useEffect(() => {
        if (theme.swiperText) {
            const strings = JSON.parse(theme.swiperText || '{}')

            const typed = new Typed(el.current, {
                strings,
                typeSpeed: 100,
                backSpeed: 30,
                loop: true
            });

            return () => typed.destroy();
        }
    }, [theme]);

    return <span ref={el} className={className} />
}