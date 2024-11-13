// 生成随机数
export function getRandom(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// 随机预览图
export function randomImage() {
    const covers = [
        "https://bu.dusays.com/2023/11/10/654e2da1d80f8.jpg",
        "https://bu.dusays.com/2023/11/10/654e2d719d31c.jpg",
        "https://bu.dusays.com/2023/11/10/654e2cf92cd45.jpg",
        "https://bu.dusays.com/2023/11/10/654e2cf6055b0.jpg",
        "https://bu.dusays.com/2023/11/10/654e2db0889fe.jpg",
        "https://bu.dusays.com/2023/11/10/654e2d50015a9.jpg",
        "https://bu.dusays.com/2023/11/05/65473848ed863.jpg",
        "https://bu.dusays.com/2023/11/10/654e2c870e280.jpg",
        "https://bu.dusays.com/2023/11/10/654e2c717eb73.jpg",
        "https://bu.dusays.com/2023/11/10/654e2c5d75d5b.jpg",
        "https://bu.dusays.com/2023/11/10/654e2da27801e.jpg",
        "https://bu.dusays.com/2023/11/10/654e2d2a67517.jpg",
        "https://bu.dusays.com/2023/11/10/654e2cf47f17a.jpg",
        "https://bu.dusays.com/2023/11/05/65473848ed863.jpg"
    ];

    return covers[getRandom(0, covers.length - 1)];
}
