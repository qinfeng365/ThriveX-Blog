"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import lightLogo from '@/assets/image/light_logo.png';
import darkLogo from '@/assets/image/dark_logo.png';

import { IoIosArrowDown } from "react-icons/io";
import "./index.scss"

const Header = () => {
    const cateList = [
        {
            "id": 1,
            "name": "开发笔记",
            "url": "/",
            "mark": "kfbj",
            "icon": "🎉",
            "level": 0,
            "children": []
        },
        {
            "id": 2,
            "name": "生活随笔",
            "url": "/",
            "mark": "shsb",
            "icon": "✍️",
            "level": 0,
            "children": []
        },
        {
            "id": 4,
            "name": "大前端",
            "url": "http://127.0.0.1:5000",
            "mark": "dqd",
            "icon": "🎉",
            "level": 0,
            "children": [
                {
                    "id": 5,
                    "name": "前端",
                    "url": "/",
                    "mark": "qd",
                    "icon": "?",
                    "level": 4,
                    "children": []
                },
                {
                    "id": 7,
                    "name": "Java",
                    "url": "/",
                    "mark": "java",
                    "icon": "?",
                    "level": 4,
                    "children": []
                },
                {
                    "id": 9,
                    "name": "Python",
                    "url": "/",
                    "mark": "python",
                    "icon": "?",
                    "level": 4,
                    "children": []
                }
            ]
        }
    ];

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='HeaderComponent'>
            <div className={`header ${isScrolled ? 'bg' : ''}`}>
                <div className="w-[1500px] mx-auto flex items-center h-full">
                    <ul className="flex items-center h-full">
                        <li className="relative">
                            <Link href="/" className="flex items-center">
                                <img
                                    src={!isScrolled ? darkLogo.src : lightLogo.src}
                                    alt="Logo"
                                    className="h-10 pr-5 transition-transform hover:scale-90"
                                />
                            </Link>
                        </li>

                        <li className="relative group">
                            <Link href="/" className={`text-[15px] px-5 py-4 ${isScrolled ? 'text-[#333]' : 'text-white'} transition-colors group-hover:text-primary`}>
                                💎 首页
                            </Link>
                        </li>

                        {cateList.map(one => (
                            <li key={one.id} className="relative group">
                                <Link href={one.url} className={`text-[15px] px-5 py-4 ${isScrolled ? 'text-[#333]' : 'text-white'} transition-colors flex items-center group-hover:text-primary`}>
                                    {one.icon} {one.name}
                                    {one.children.length > 0 && (
                                        <IoIosArrowDown className="ml-2" />
                                    )}
                                </Link>

                                {one.children.length > 0 && (
                                    // <ul className="absolute left-0 w-full bg-white shadow-lg rounded-md hidden group-hover:block">
                                    <ul className="two">
                                        {one.children.map(two => (
                                            <li key={two.id} className="two_item">
                                                <Link href={two.url} className="two_item_nav">
                                                    {two.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;