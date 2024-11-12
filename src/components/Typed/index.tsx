"use client"

import { useEffect, useRef } from 'react';
import { useConfigStore } from '@/stores'
import Typed from 'typed.js';

export default ({ className }: { className?: string }) => {
    const store = useConfigStore()

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["System.out.print(\"有些梦虽然遥不可及，但并不是不可能实现!\");",
                "print(\" 互联网从不缺乏天才, 而努力才是最终的入场券!\")",
                "console.log(\"再渺小的星光，也有属于他的光芒!\")"],
            typeSpeed: 100,
            backSpeed: 30,
            loop: true
        });

        return () => typed.destroy();
    }, []);

    return <span ref={el} className={className} />
}