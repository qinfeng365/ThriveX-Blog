"use client"

import sun from './image/sun.svg'
import moon from './image/moon.svg'
import search from './image/search.svg'
import returnTop from './image/returnTop.svg'
import { useConfigStore } from '@/stores'
import { useDisclosure } from '@nextui-org/react'
import Search from '../Search'

const itemSty = "w-full p-2 hover:bg-[#edf5ff] dark:hover:bg-[#4e5969] cursor-pointer transition-colors"

export default () => {
    const { isDark, setIsDark } = useConfigStore()
    const { isOpen, onClose, onOpenChange } = useDisclosure();

    const onReturnTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <>
            <div className="overflow-hidden fixed top-[70%] right-[3%] z-20 flex flex-col w-12 bg-white dark:bg-black-b border dark:border-[#4e5969] rounded-md divide-y dark:divide-[#4e5969] transition-colors">
                {isDark
                    ? <img src={sun.src} alt="太阳" className={itemSty} onClick={() => setIsDark(false)} />
                    : <img src={moon.src} alt="月亮" className={itemSty} onClick={() => setIsDark(true)} />
                }

                <img src={search.src} alt="搜索" className={itemSty} onClick={onOpenChange} />
                <img src={returnTop.src} alt="返回顶部" className={itemSty} onClick={onReturnTop} />
            </div>

            {/* 搜索组件 */}
            <Search disclosure={{ isOpen, onClose, onOpenChange }} />
        </>
    )
}