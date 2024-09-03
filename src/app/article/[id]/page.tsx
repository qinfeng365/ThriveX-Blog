import { getArticleDataAPI } from '@/api/article'

import Starry from "@/components/Starry"
import Swiper from "@/components/Swiper"

import Tag from "../components/Tag";
import Copyright from "../components/Copyright";
import UpAndDown from "../components/UpAndDown";
import Comment from "../components/Comment";
import ContentMd from "../components/ContentMd";
import ContentNav from "../components/ContentNav";

import { IoMdPricetags } from "react-icons/io";
import { FaHotjar } from "react-icons/fa";
import { AiOutlineComment } from "react-icons/ai";
import { LuTimer } from "react-icons/lu";

import dayjs from 'dayjs';

interface Props {
    params: { id: number };
};

export default async ({ params }: Props) => {
    const id = params.id
    const { data } = await getArticleDataAPI(id)

    // 图标样式
    const iconSty = "flex justify-center items-center w-5 h-5 rounded-full text-xs mr-1"

    return (
        <>
            <div className="ArticlePage">
                <Swiper>
                    {/* 星空背景组件 */}
                    <Starry />

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[65%] text-white custom_text_shadow">
                        <div className="text-4xl text-center mb-14">{data.title}</div>

                        <div className="flex space-x-8">
                            <div className="flex">
                                <span className={`${iconSty} bg-[#A543E6]`}><IoMdPricetags /></span>
                                <span>所属分类：{data.cateList[0]?.name}</span>
                            </div>

                            <div className="flex">
                                <span className={`${iconSty} bg-[#EA3B24]`}><FaHotjar /></span>
                                <span>阅读量：{data.view}</span>
                            </div>

                            <div className="flex">
                                <span className={`${iconSty} bg-[#4FA759]`}><AiOutlineComment /></span>
                                <span>评论数量：{data.comment}</span>
                            </div>

                            <div className="flex">
                                <span className={`${iconSty} bg-[#5A9CF8]`}><LuTimer /></span>
                                <span>发布时间：{dayjs(+data.createTime!).format('YYYY-MM-DD HH:mm')}</span>
                            </div>
                        </div>
                    </div>
                </Swiper>

                <div className="w-6/12 mx-auto relative">
                    <ContentMd data={data.content}></ContentMd>

                    <div className="w-full">
                        <Tag data={data.tagList} />

                        <Copyright />
                        <UpAndDown id={id} prev={data.prev} next={data.next} />
                        <Comment id={id} />
                    </div>
                </div>

                <ContentNav />
            </div>
        </>
    )
}