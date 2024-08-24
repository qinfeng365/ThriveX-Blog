"use client";

import React, { useEffect, useState } from "react";
import MarkNav from "markdown-navbar";
import ReactMarkdown from "react-markdown";
import "markdown-navbar/dist/navbar.css";
import "github-markdown-css"
import "./index.scss";
import directory from '@/assets/svg/other/directory.svg'

export default ({ data }: { data: string }) => {
    useEffect(() => {
        // 当组件挂载时，改变body背景颜色
        document.body.style.backgroundColor = '#fff';

        // 当组件卸载时，恢复body背景颜色
        return () => {
            document.body.style.backgroundColor = '#f9f9f9';
        };
    }, []);

    return (
        <div className="ContentMdComponent">
            <div className="content markdown-body">
                <ReactMarkdown>{data}</ReactMarkdown>
            </div>

            <div className="nav">
                <div className="flex justify-center items-center">
                    <img src={directory.src} alt="" className="w-5 mr-2" /> 目录
                </div>

                <MarkNav source={data} />
            </div>
        </div>
    );
};
