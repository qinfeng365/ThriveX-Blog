"use client";

import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "github-markdown-css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { useConfigStore } from "@/stores";
import "./index.scss";

interface Props {
    data: string;
}

const ContentMdComponent = ({ data }: Props) => {
    useEffect(() => {
        const images = document.querySelectorAll<HTMLImageElement>('img');

        setTimeout(() => {
            images.forEach((img) => {
                img.style.filter = 'blur(0)';
            });
        }, 1000);
    }, []);

    const { isDark } = useConfigStore()
    useEffect(() => {
        // 当组件挂载时，改变body背景颜色
        document.body.style.backgroundColor = '#fff';
        let color = isDark ? "36, 41, 48" : "255, 255, 255"

        // 更改波浪颜色
        const waves = document.querySelectorAll<SVGUseElement>(".waves use");
        waves[0].style.fill = `rgba(${color}, 0.7)`;
        waves[1].style.fill = `rgba(${color}, 0.5)`;
        waves[2].style.fill = `rgba(${color}, 0.3)`;
        waves[3].style.fill = `rgba(${color})`;

        // 当组件卸载时，恢复body背景颜色
        return () => {
            document.body.style.backgroundColor = '#f9f9f9';

            waves[0].style.fill = "rgba(249, 249, 249, 0.7)";
            waves[1].style.fill = "rgba(249, 249, 249, 0.5)";
            waves[2].style.fill = "rgba(249, 249, 249, 0.3)";
            waves[3].style.fill = "rgba(249, 249, 249)";
        };
    }, []);

    // 自定义指定标签
    const renderers = {
        img: ({ alt, src }: { alt?: string; src?: string }) => (
            <PhotoView src={src || ''}>
                <span className="flex justify-center w-full my-4">
                    <img alt={alt} src={src} />
                </span>
            </PhotoView>
        ),
    };

    return (
        <div className="ContentMdComponent mt-12">
            <PhotoProvider>
                <div className="content markdown-body">
                    <ReactMarkdown components={renderers}>{data}</ReactMarkdown>
                </div>
            </PhotoProvider>
        </div>
    );
};

export default ContentMdComponent;
