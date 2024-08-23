"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import lightLogo from '@/assets/image/light_logo.png';
import darkLogo from '@/assets/image/dark_logo.png';

import "./index.scss"
import { IoIosArrowDown } from 'react-icons/io';
import { Cate } from '@/types/app/cate';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [cateList, setCateList] = useState<Cate[]>([])

    const getCateList = async () => {
        const res = await fetch("http://localhost:9999/api/cate/all")
        const {data} = await res.json()
        console.log(data);
        setCateList(data)
    }

    useEffect(() => {
        getCateList()

        window.scrollTo(0, 0);

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='HeaderComponent'>
            <div className={`header ${isScrolled ? 'gradient' : ''}`}>
                <div className="w !w-[1500px]">
                    <ul className="one">
                        <li className="one_item">
                            <Link href="/" className="one_item_nav">
                                <img
                                    src={!isScrolled ? darkLogo.src : lightLogo.src}
                                    alt="Logo"
                                />
                            </Link>
                        </li>

                        <li className="one_item">
                            <Link href="/" className={`one_item_nav ${isScrolled ? 'text-[#333]' : 'text-white'}`}>
                                💎 首页
                            </Link>
                        </li>

                        {cateList.map(one => (
                            <li key={one.id} className="one_item">
                                <Link href={one.url} className={`one_item_nav ${isScrolled ? 'text-[#333]' : 'text-white'}`}>
                                    {one.icon} {one.name}
                                    {one.children.length > 0 && (
                                        <IoIosArrowDown className="ml-2" />
                                    )}
                                </Link>

                                {one.children.length > 0 && (
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