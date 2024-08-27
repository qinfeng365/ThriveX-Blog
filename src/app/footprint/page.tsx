"use client";

import { useEffect, useState } from "react";
import AMapLoader from "@amap/amap-jsapi-loader";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import "./page.scss";

export default function MapContainer() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const [data, setData] = useState(null);
    let map = null;

    useEffect(() => {
        window._AMapSecurityConfig = {
            securityJsCode: "c8c59309d679d989a8a56461956cdd38",
        };

        AMapLoader.load({
            key: "455e8ada6799412070c1156c6936b7c4", // 申请好的Web端开发者Key，首次调用 load 时必填
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
                const locations = [
                    {
                        position: [113.625368, 34.746599],
                        title: "郑州",
                        address: "河南省郑州市新郑市",
                        time: "2024年8月27日 19:39",
                        content: "这是上海的信息窗口",
                        image: "https://d32kak7w9u5ewj.cloudfront.net/media/image/2022/05/22055cf1b755443d903111e7ed3661ff.jpg"
                    },
                    {
                        position: [116.407526, 39.90403],
                        title: "北京",
                        address: "上海市黄浦区",
                        time: "2024年8月27日 19:39",
                        content: "这是上海的信息窗口",
                        image: "https://d32kak7w9u5ewj.cloudfront.net/media/image/2022/05/22055cf1b755443d903111e7ed3661ff.jpg"
                    },
                    {
                        position: [121.473701, 31.230416],
                        title: "黄浦江",
                        address: "上海市黄浦区",
                        time: "2024年8月27日 19:39",
                        content: "这是上海的信息窗口",
                        image: "https://d32kak7w9u5ewj.cloudfront.net/media/image/2022/05/22055cf1b755443d903111e7ed3661ff.jpg"
                    },
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
                                    <img src={data.image} alt="" className="w-6/12 mb-5 rounded-2xl object-contain" />

                                    <div className="flex flex-col justify-between w-full ml-8 mb-8">
                                        <p className="overflow-scroll max-h-[210px] text-[#d6d6d6] px-[5px]">{data?.content}</p>

                                        <div className="text-sm text-end text-[#a5a5a5] pt-2">
                                            <p>拍摄于：{data.address}</p>
                                            <p>时间：{data.time}</p>
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
