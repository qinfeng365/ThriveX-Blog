"use client"

import { useEffect, useState } from "react";
import directory from '@/assets/svg/other/directory.svg'
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

import "./index.scss";

interface NavItem {
    href: string;
    start: number;
    end?: number;
    className: string;
}

// 定义距离视口顶部多少像素时高亮导航项
const OFFSET = 100;

const ContentNav = () => {
    const [open, setOpen] = useState(false);
    const [navs, setNavs] = useState<NavItem[]>([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        // 获取当前容器中所有的标题
        const list = document.querySelectorAll(".content h1, .content h2, .content h3");

        list.forEach((nav) => {
            nav.setAttribute("id", nav.textContent!)

            switch (nav.tagName) {
                case "H1":
                    nav.setAttribute("class", "h1")
                    break;
                case "H2":
                    nav.setAttribute("class", "h2")
                    break;
                case "H3":
                    nav.setAttribute("class", "h3")
                    break;
            }
        });

        // 给每个标题设置一个视口顶部的距离
        const titles = Array.from(list).map(t => {
            const top = t.getBoundingClientRect().top + window.scrollY;
            return { href: t.textContent!, top, className: t.className };
        });

        // 设置起始距离和结束距离
        const titlesList: NavItem[] = titles.map((title, index) => ({
            href: title.href,
            start: title.top,
            end: index < titles.length - 1 ? titles[index + 1].top : Infinity,
            className: title.className
        }));

        setNavs(titlesList);

        // 页面滚动到指定位置高亮导航项
        const handleScroll = () => {
            const top = window.scrollY + OFFSET;
            setActive(top);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            {open
                ? (
                    <div className="fixed top-[80%] left-[15%] z-50 cursor-pointer flex justify-center items-center w-12 h-12 rounded-xl bg-white p-3 border" onClick={() => setOpen(false)}>
                        <MdOutlineKeyboardDoubleArrowLeft className="w-full text-4xl text-primary" />
                    </div>
                )
                : (
                    <div className="fixed top-[80%] left-[2%] z-50 cursor-pointer w-12 h-12 rounded-xl bg-white p-3 border" onClick={() => setOpen(true)}>
                        <img src={directory.src} alt="" className="w-full text-5xl text-primary" />
                    </div>
                )
            }

            <div className={`ContentNavComponent overflow-hidden fixed top-0 z-50 h-screen bg-white border-r shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] ${open ? 'w-[13%] p-[20px_10px]' : 'w-0'} transition-width`}>
                <div className="flex justify-center items-center">
                    <img src={directory.src} alt="" className="w-5 mr-2" /> 目录
                </div>

                <div className="navs w-full mt-4">
                    {navs.map((item, index) => (
                        <a
                            key={index}
                            href={`#${item.href}`}
                            className={`nav_item overflow-hidden relative block p-1 hover:text-primary transition duration-700 ${active >= item.start && active < item.end! ? 'active' : ''} ${item.className}`}
                        >
                            {item.href}
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ContentNav;