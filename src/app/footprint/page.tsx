"use client";

import { useEffect, useState } from "react";
import AMapLoader from "@amap/amap-jsapi-loader";
import { Modal, ModalContent, ModalHeader, ModalBody, useDisclosure } from "@nextui-org/react";
import "./page.scss";

interface Location {
    position: [number, number];
    title: string;
    address: string;
    time: string;
    content: string;
    image: string;
}

export default function MapContainer() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const [data, setData] = useState<Location | null>(null);
    let map: any = null;

    useEffect(() => {
        // @ts-ignore
        window._AMapSecurityConfig = {
            securityJsCode: process.env.GAODE_SECURITYJS_CODE,
        };

        AMapLoader.load({
            key: process.env.GAODE_KEY_CODE!, // 申请好的Web端开发者Key，首次调用 load 时必填
            version: "2.0",
            plugins: ["AMap.Scale", "AMap.Marker"],
        })
            .then((AMap) => {
                map = new AMap.Map("container", {
                    // 地图样式
                    mapStyle: "amap://styles/grey",
                    viewMode: "3D", // 是否为3D地图模式
                    zoom: 4.8,
                    center: [113.625368, 34.746599], // 初始化地图中心点位置
                });

                // 定义多个标记的位置和信息内容
                const locations: Location[] = [
                    {
                        position: [113.625368, 34.746599],
                        title: "少林寺",
                        address: "河南省郑州市登封市",
                        time: "2024年8月27日 19:39",
                        content: "少林寺的武术表演非常精彩，历史文化深厚。",
                        image: "https://d32kak7w9u5ewj.cloudfront.net/media/image/2022/05/22055cf1b755443d903111e7ed3661ff.jpg"
                    },
                    {
                        position: [116.404269, 39.914935],
                        title: "故宫",
                        address: "北京市东城区景山前街4号",
                        time: "2024年8月27日 19:45",
                        content: "故宫的建筑宏伟壮观，历史文物丰富。",
                        image: "https://d32kak7w9u5ewj.cloudfront.net/media/image/2022/05/22055cf1b755443d903111e7ed3661ff.jpg"
                    },
                    {
                        position: [121.499763, 31.239693],
                        title: "外滩",
                        address: "上海市黄浦区中山东一路",
                        time: "2024年8月27日 19:50",
                        content: "外滩的夜景非常美丽，黄浦江两岸灯火辉煌。",
                        image: "https://d32kak7w9u5ewj.cloudfront.net/media/image/2022/05/22055cf1b755443d903111e7ed3661ff.jpg"
                    },
                    {
                        position: [114.305393, 30.593099],
                        title: "黄鹤楼",
                        address: "湖北省武汉市武昌区蛇山西山坡特1号",
                        time: "2024年8月27日 19:55",
                        content: "黄鹤楼的景色非常优美，可以俯瞰长江。",
                        image: "https://d32kak7w9u5ewj.cloudfront.net/media/image/2022/05/22055cf1b755443d903111e7ed3661ff.jpg"
                    },
                    {
                        position: [113.330977, 23.132191],
                        title: "广州塔",
                        address: "广东省广州市海珠区阅江西路222号",
                        time: "2024年8月27日 20:00",
                        content: "广州塔的夜景和灯光秀非常震撼。",
                        image: "https://d32kak7w9u5ewj.cloudfront.net/media/image/2022/05/22055cf1b755443d903111e7ed3661ff.jpg"
                    },
                    {
                        position: [108.940175, 34.341568],
                        title: "兵马俑",
                        address: "陕西省西安市临潼区秦陵街道",
                        time: "2024年8月27日 20:05",
                        content: "兵马俑的规模非常宏大，历史感十足。",
                        image: "https://d32kak7w9u5ewj.cloudfront.net/media/image/2022/05/22055cf1b755443d903111e7ed3661ff.jpg"
                    },
                    {
                        position: [104.067923, 30.679943],
                        title: "宽窄巷子",
                        address: "四川省成都市青羊区",
                        time: "2024年8月27日 20:10",
                        content: "宽窄巷子的美食和文化氛围非常浓厚。",
                        image: "https://d32kak7w9u5ewj.cloudfront.net/media/image/2022/05/22055cf1b755443d903111e7ed3661ff.jpg"
                    },
                    {
                        position: [117.227239, 31.820587],
                        title: "包公园",
                        address: "安徽省合肥市庐阳区包公园路72号",
                        time: "2024年8月27日 20:15",
                        content: "包公园的历史文化和景色都很吸引人。",
                        image: "https://d32kak7w9u5ewj.cloudfront.net/media/image/2022/05/22055cf1b755443d903111e7ed3661ff.jpg"
                    },
                    {
                        position: [118.796877, 32.060255],
                        title: "中山陵",
                        address: "江苏省南京市玄武区紫金山南麓",
                        time: "2024年8月27日 20:20",
                        content: "中山陵的建筑非常庄严肃穆，值得一游。",
                        image: "https://d32kak7w9u5ewj.cloudfront.net/media/image/2022/05/22055cf1b755443d903111e7ed3661ff.jpg"
                    },
                    {
                        position: [120.155070, 30.274084],
                        title: "西湖",
                        address: "浙江省杭州市西湖区",
                        time: "2024年8月27日 20:25",
                        content: "西湖的景色非常秀丽，漫步湖边非常惬意。",
                        image: "https://d32kak7w9u5ewj.cloudfront.net/media/image/2022/05/22055cf1b755443d903111e7ed3661ff.jpg"
                    }
                ];

                // 遍历 locations 数组，创建标记
                locations.forEach((location) => {
                    const marker = new AMap.Marker({
                        position: location.position, // 标记位置
                        map: map, // 将标记添加到地图
                    });

                    // 点击标记时，设置选中的位置，并打开 Modal
                    marker.on("click", () => {
                        onOpen();
                        setData(location);
                    });
                });

                // 点击任意位置清空信息框内容并关闭
                map.on("click", () => {
                    setData(null);
                });
            })
            .catch((e) => {
                console.log(e);
            });

        return () => map?.destroy();
    }, []);

    return (
        <>
            <div id="container"></div>

            <Modal
                size="4xl"
                backdrop="opaque"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                classNames={{
                    backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
                }}
            >
                <ModalContent className="bg-[rgba(36,40,45,0.9)]">
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-center pb-2 text-white">{data?.title}</ModalHeader>

                            <ModalBody>
                                <div className="flex">
                                    <img src={data?.image} alt="" className="w-6/12 mb-5 rounded-2xl object-contain" />

                                    <div className="flex flex-col justify-between w-full ml-8 mb-8">
                                        <p className="overflow-scroll max-h-[210px] text-[#d6d6d6] px-[5px]">{data?.content}</p>

                                        <div className="text-sm text-end text-[#a5a5a5] pt-2">
                                            <p>拍摄于：{data?.address}</p>
                                            <p>时间：{data?.time}</p>
                                        </div>
                                    </div>
                                </div>

                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}