"use client"

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Show from '@/components/Show'

import lightLogo from '@/assets/image/light_logo.png';
import darkLogo from '@/assets/image/dark_logo.png';

import { IoIosArrowDown } from 'react-icons/io';
import { Cate } from '@/types/app/cate';
import { getCateListAPI } from '@/api/cate';
import "./index.scss"

const Header = () => {
    const patchName = usePathname();
    // 这些路径段不需要改变导航样式
    const isPathSty = ['/my'].includes(patchName)
    // 是否改变导航样式
    const [isScrolled, setIsScrolled] = useState(false);

    // 获取分类列表
    const [cateList, setCateList] = useState<Cate[]>([])
    const getCateList = async () => {
        const { data } = await getCateListAPI()
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
                                    src={isPathSty || isScrolled ? lightLogo.src : darkLogo.src}
                                    alt="Logo"
                                />
                            </Link>
                        </li>

                        <li className="one_item">
                            <Link href="/" className={`one_item_nav ${isPathSty || isScrolled ? 'text-[#333]' : 'text-white'}`}>
                                💎 首页
                            </Link>
                        </li>

                        {cateList.map(one => (
                            <li key={one.id} className="one_item">
                                <Link href={`/cate/${one.id}?name=${one.name}`} className={`one_item_nav ${isPathSty || isScrolled ? 'text-[#333]' : 'text-white'}`}>
                                    {one.icon} {one.name}
                                    <Show is={!!one.children.length} children={(
                                        <IoIosArrowDown className="ml-2" />
                                    )} />
                                </Link>

                                <Show is={!!one.children.length} children={(
                                    <ul className="two">
                                        {one.children.map(two => (
                                            <li key={two.id} className="two_item">
                                                <Link href={`/cate/${two.id}?name=${two.name}`} className="two_item_nav">
                                                    {two.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )} />
                            </li>
                        ))}

                        <li className="one_item">
                            <Link href="/footprint" className={`one_item_nav ${isPathSty || isScrolled ? 'text-[#333]' : 'text-white'}`}>
                                ⛳️ 足迹
                            </Link>
                        </li>

                        <li className="one_item">
                            <Link href="/my" className={`one_item_nav ${isPathSty || isScrolled ? 'text-[#333]' : 'text-white'}`}>
                                👋 关于我
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;