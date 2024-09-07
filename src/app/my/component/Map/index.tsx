"use client";

import { useEffect } from "react";
import AMapLoader from "@amap/amap-jsapi-loader";

export default function MapContainer() {
    let map: any;

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
                    viewMode: "3D", // 是否为3D地图模式
                    zoom: 7,
                    center: [113.625351, 34.746303], // 初始化地图中心点位置
                });

                new AMap.Marker({
                    position: [113.625351, 34.746303], // 标记位置
                    map, // 将标记添加到地图
                });
            })
            .catch((e) => {
                console.log(e);
            });

        return () => map?.destroy();
    }, []);

    return (
        <>
            <div id="container" className="w-full h-full border rounded-3xl"></div>
        </>
    );
}