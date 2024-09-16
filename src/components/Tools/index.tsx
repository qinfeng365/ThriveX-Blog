"use client"

import sun from './image/sun.svg'
import moon from './image/moon.svg'
import search from './image/search.svg'
import returnTop from './image/returnTop.svg'
import { useConfigStore } from '@/stores'

const itemSty = "w-full p-2 hover:bg-[#edf5ff] dark:hover:bg-[#4e5969] cursor-pointer transition-colors"

export default () => {
    const { isDark, setIsDark } = useConfigStore()

    return (
        <>
            <div className="overflow-hidden fixed top-[70%] right-[3%] flex flex-col w-12 bg-white dark:bg-black-b border dark:border-[#4e5969] rounded-md divide-y dark:divide-[#4e5969] transition-colors">
                {isDark
                    ? <img src={sun.src} alt="太阳" className={itemSty} onClick={() => setIsDark(false)} />
                    : <img src={moon.src} alt="月亮" className={itemSty} onClick={() => setIsDark(true)} />
                }
                <img src={search.src} alt="搜索" className={itemSty} />
                <img src={returnTop.src} alt="返回顶部" className={itemSty} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
            </div>
        </>
    )
}