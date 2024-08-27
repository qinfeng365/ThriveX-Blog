"use client"

import { cardio } from 'ldrs'

export default () => {
    cardio.register()

    return (
        <>
            <div className='fixed w-full h-full z-50 bg-[rgb(255,255,255,0.5)] rounded-lg flex justify-center items-center'>
                <l-cardio
                    size="80"
                    stroke="4"
                    speed="2"
                    color="#539dfd"
                />
            </div>
        </>
    )
}