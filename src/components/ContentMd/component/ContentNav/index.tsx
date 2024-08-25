import { useEffect, useState } from "react";
import directory from '@/assets/svg/other/directory.svg'
import "./index.scss";

interface NavItem {
    href: string;
    start: number;
    end?: number;
    className: string;
}

const OFFSET = 200; // 定义距离视口顶部多少像素时高亮导航项

const App: React.FC = () => {
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
        <div className="ContentNavComponent">
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

    );
};

export default App;