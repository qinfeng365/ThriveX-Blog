"use client";

import { useEffect, useState } from "react";
import AMapLoader from "@amap/amap-jsapi-loader";
import { Modal, ModalContent, ModalHeader, ModalBody, useDisclosure } from "@nextui-org/react";
import { getFootprintListAPI } from "@/api/footprint";
import { Footprint } from "@/types/app/footprint";
import { PhotoProvider, PhotoSlider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import dayjs from 'dayjs'
import "./page.scss";

export default function MapContainer() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [isDismissable, setIsDismissable] = useState(true); // 默认允许关闭
    const [list, setList] = useState<Footprint[]>([])

    const getFootprintList = async () => {
        const { data } = await getFootprintListAPI()
        setList(data)
    }

    useEffect(() => {
        getFootprintList()
    }, [])

    const [data, setData] = useState<Footprint | null>(null);
    let map: any = null;

    useEffect(() => {
        if (!list.length) return

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
                    center: [105.625368, 37.746599], // 初始化地图中心点位置
                });

                // 遍历 locations 数组，创建标记
                list.forEach((data) => {
                    const marker = new AMap.Marker({
                        position: data.position.split(","), // 标记位置
                        map: map, // 将标记添加到地图
                    });

                    // 点击标记时，设置选中的位置，并打开 Modal
                    marker.on("click", () => {
                        onOpen();
                        setData(data);
                    });
                });

                // 点击任意位置清空信息框内容并关闭
                // map.on("click", () => {
                //     setData(null);
                // });
            })
            .catch((e) => {
                console.log(e);
            });

        return () => map?.destroy();
    }, [list]);

    return (
        <>
            <div id="container"></div>

            <Modal
                size="4xl"
                backdrop="opaque"
                isDismissable={isDismissable}
                onOpenChange={(open) => {
                    if (isDismissable || !open) {
                        onOpenChange();
                    }
                }}
                isOpen={isOpen}
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
                                    <div className="w-6/12 mb-5 flex flex-col">
                                        <PhotoProvider
                                            onVisibleChange={(visible) => {
                                                // 当图片预览模式打开时，不允许关闭 Modal
                                                setIsDismissable(!visible);
                                            }}
                                        >
                                            {
                                                data?.images?.map((item, index) => (
                                                    <PhotoView src={item} key={index}>
                                                        <img src={item} alt="" className={`rounded-2xl object-fill ${index != 0 ? 'hidden' : ''}`} />
                                                    </PhotoView>
                                                ))
                                            }
                                        </PhotoProvider>
                                    </div>

                                    <div className="flex flex-col justify-between w-full ml-8 mb-8">
                                        <p className="overflow-scroll max-h-[210px] text-[#d6d6d6] px-[5px]">{data?.content}</p>

                                        <div className="text-sm text-end text-[#a5a5a5] pt-2">
                                            <p>时间：{dayjs(+data?.createTime).format('YYYY-MM-DD HH:mm')}</p>
                                            <p>地址：{data?.address}</p>
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