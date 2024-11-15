"use client"

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// 监听路由变化
const RouteChangeHandler: React.FC = () => {
    const pathname = usePathname();

    // 每次切换页面滚动到顶部
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export default RouteChangeHandler;
