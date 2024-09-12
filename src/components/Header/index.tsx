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
import { Button } from '@nextui-org/react';

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

    // 是否暗黑模式
    const [isDark, setIsDark] = useState(false)
    // 手动切换主题
    const toTheme = () => {
        const html = document.querySelector('html')
        setIsDark(html?.classList.toggle('dark')!)
    }
    // 判断当前主题
    useEffect(() => {
        const html = document.querySelector('html')
        setIsDark(html?.className.includes("dark")!)
    }, [])

    return (
        <div className='HeaderComponent'>
            <div className={`header fixed top-0 w-full h-16 backdrop-blur-[5px] transition-colors z-50 after:content-[''] after:block after:w-full after:h-0 after:bg-[linear-gradient(#fff,transparent_70%)] dark:after:bg-[linear-gradient(#2b333e,transparent_70%)] after:transition-colors ${isPathSty || isScrolled ? 'bg-[rgba(255,255,255,0.9)] dark:bg-[rgba(44,51,62,0.9)] border-b dark:border-[#2b333e] after:!h-8 after:transition-height]' : 'border-transparent'} transition-all`}>
                <div className="h-16 w-[1500px] mx-auto">
                    <ul className="flex items-center h-16">
                        <li className="relative">
                            <Link href="/" className="flex items-center p-5 text-[15px] transition-colors">
                                {
                                    isDark
                                        ? <img src={darkLogo.src} alt="Logo" className='h-10 pr-5 hover:scale-90 transition-all' />
                                        : <img src={isPathSty || isScrolled ? lightLogo.src : darkLogo.src} alt="Logo" className='h-10 pr-5 hover:scale-90 transition-all' />
                                }
                            </Link>
                        </li>

                        <li className="relative">
                            <Link href="/" className={`flex items-center p-5 text-[15px] hover:!text-primary transition-colors ${isPathSty || isScrolled ? 'text-[#333] dark:text-white' : 'text-white'}`}>
                                💎 首页
                            </Link>
                        </li>

                        {cateList.map(one => (
                            <li key={one.id} className="group/one relative">
                                <Link href={`/cate/${one.id}?name=${one.name}`} className={`flex items-center p-5 text-[15px] group-hover/one:!text-primary transition-colors ${isPathSty || isScrolled ? 'text-[#333] dark:text-white' : 'text-white'}`}>
                                    {one.icon} {one.name}
                                    <Show is={!!one.children.length} children={(
                                        <IoIosArrowDown className="ml-2" />
                                    )} />
                                </Link>

                                <Show is={!!one.children.length} children={(
                                    <ul className="hidden group-hover/one:block overflow-hidden absolute top-[50px] w-full rounded-md bg-[#f9f9f9]" style={{ boxShadow: '0 12px 32px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.08)' }}>
                                        {one.children.map(two => (
                                            <li key={two.id} className='group/two'>
                                                <Link href={`/cate/${two.id}?name=${two.name}`} className="relative inline-block w-full p-2.5 pl-2.5 text-[15px] box-border text-[#666] dark:text-white hover:!text-primary transition-all after:content-[''] after:absolute after:left-2.5 after:top-1/2 after:-translate-y-1/2 after:w-0 after:h-[3px] after:bg-primary after:transition-width group-hover/two:bg-[#f2f2f2] group-hover/two:pl-8 hover:after:w-2.5">
                                                    {two.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )} />
                            </li>
                        ))}

                        <li className="relative">
                            <Link href="/footprint" className={`flex items-center p-5 text-[15px] hover:!text-primary transition-colors ${isPathSty || isScrolled ? 'text-[#333] dark:text-white' : 'text-white'}`}>
                                ⛳️ 足迹
                            </Link>
                        </li>

                        <li className="relative">
                            <Link href="/my" className={`flex items-center p-5 text-[15px] hover:!text-primary transition-colors ${isPathSty || isScrolled ? 'text-[#333] dark:text-white' : 'text-white'}`}>
                                👋 关于我
                            </Link>
                        </li>

                        <Button onClick={toTheme}>切换主题</Button>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;