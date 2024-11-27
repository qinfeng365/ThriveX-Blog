"use client"

import { PhotoProvider, PhotoView } from "react-photo-view"
import 'react-photo-view/dist/react-photo-view.css';

export default () => {
    const list = [
        "https://bu.dusays.com/2024/10/28/671f7a44631d7.png",
        "https://bu.dusays.com/2024/09/17/66e97036dddcb.png",
        "https://bu.dusays.com/2024/09/17/66e97035726ae.png",
        "https://bu.dusays.com/2024/09/17/66e97031cd456.png"
    ]

    return (
        <>
            <div className={`flex justify-center ${list.length && 'mt-4'}`}>
                <PhotoProvider
                    speed={() => 800}
                    easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
                >
                    <div className={`grid gap-4 ${list.length === 1 ? 'justify-center' : 'grid-cols-2'}`}>
                        {
                            list?.map((url, index) => (
                                <PhotoView key={index} src={url}>
                                    <img src={url} alt="闪念图片" className="rounded-2xl w-full h-full object-cover cursor-pointer" />
                                </PhotoView>
                            ))
                        }
                    </div>
                </PhotoProvider>
            </div>
        </>
    )
}