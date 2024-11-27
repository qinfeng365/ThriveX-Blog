"use client"

import Masonry from "react-masonry-css"

const breakpointColumnsObj = {
    default: 2,
    1024: 3,
    700: 2
};

export default () => {
    return (
        <>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="masonry-grid"
                columnClassName="masonry-grid_column"
            >
                <img src="https://bu.dusays.com/2024/10/28/671f7a44631d7.png" alt="闪念图片" className="mb-3 rounded-lg" />
                <img src="https://bu.dusays.com/2024/09/17/66e97036dddcb.png" alt="闪念图片" className="mb-3 rounded-lg" />
                <img src="https://bu.dusays.com/2024/09/17/66e97035726ae.png" alt="闪念图片" className="mb-3 rounded-lg" />
                <img src="https://bu.dusays.com/2024/09/17/66e97031cd456.png" alt="闪念图片" className="mb-3 rounded-lg" />
            </Masonry>
        </>
    )
}