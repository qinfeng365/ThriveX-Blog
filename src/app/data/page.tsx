"use client"

import Swiper from "@/components/Swiper";
import Starry from "@/components/Starry";
import Archiving from './components/Archiving'

export default () => {

    return (
        <>
            <title>数据统计</title>
            <meta name="description" content="数据统计" />

            <Swiper isRipple={false}>
                {/* 星空背景组件 */}
                <Starry />

                <div className="absolute top-[45%] left-[50%] transform -translate-x-1/2 flex flex-col items-center">
                    <div className="text-white text-[20px] xs:text-[25px] sm:text-[30px] whitespace-nowrap custom_text_shadow">数据统计</div>
                </div>
            </Swiper>

            <div className="w-[1200px] mt-10 mx-auto bg-white p-10 rounded-xl border">
                <Archiving />
            </div>
        </>
    )
}