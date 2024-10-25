"use client"

import Link from "next/link";
import { useEffect, useState } from "react"

import { getArticleListAPI } from '@/api/article'
import { Article } from "@/types/app/article"

import Swiper from "@/components/Swiper";
import Starry from "@/components/Starry";
import { Accordion, AccordionItem } from "@nextui-org/react";

import archiving from '@/assets/svg/other/archiving.svg'
import { AiOutlineEye } from "react-icons/ai";


interface MonthData {
    total: number;
    list: Article[];
    wordCount: number;
}

interface YearData {
    year: number;
    total: number;
    month: Record<number, MonthData>;
    wordCount: number;
}

const Title = ({ data }: { data: YearData }) => {
    return (
        <div>
            <div className="text-xl font-sans inline-block textMarkSty">{data.year} 年 {(data.wordCount / 1000) > 50 && '🔥'}</div>
            <div>总共发布了：{data.total} 篇文章</div>
            <div>总字数约：{(data.wordCount / 1000).toFixed(2)}K</div>
        </div>
    )
}

export default () => {
    const [list, setList] = useState<YearData[]>([])
    const getArticleList = async () => {
        const { data } = await getArticleListAPI()
        const result = groupByYearAndMonth(data);
        // 从早到晚排序
        result.sort((a, b) => b.year - a.year)
        console.log(result, 999);

        setList(result)
    }

    // 将文章进行分组
    function groupByYearAndMonth(data: Article[]): YearData[] {
        const groupedData: Record<number, YearData> = {};

        data.forEach(item => {
            const date = new Date(+item.createTime!);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            const wordCount = item.content ? item.content.length : 0;

            if (!groupedData[year]) {
                groupedData[year] = { year, total: 0, month: {}, wordCount: 0 };
            }

            if (!groupedData[year].month[month]) {
                groupedData[year].month[month] = { total: 0, list: [], wordCount: 0 };
            }

            groupedData[year].month[month].list.push(item);
            groupedData[year].month[month].total++;
            groupedData[year].total++;
            groupedData[year].wordCount += wordCount;
            groupedData[year].month[month].wordCount += wordCount;
        });

        return Object.values(groupedData);
    }

    useEffect(() => {
        getArticleList()
    }, [])

    return (
        <>
            <title>数据统计</title>
            <meta name="description" content="数据统计" />

            <Swiper isRipple={false}>
                {/* 星空背景组件 */}
                <Starry />

                <div className="absolute top-[45%] left-[50%] transform -translate-x-1/2 flex flex-col items-center">
                    <div className="text-white text-[20px] xs:text-[25px] sm:text-[30px] whitespace-nowrap custom_text_shadow">数据统计</div>
                </div>
            </Swiper>

            <div className="w-[1200px] mt-10 mx-auto bg-white p-10 rounded-xl border">
                <h3 className="flex items-center text-2xl mb-3"><img src={archiving.src} alt="归档" className="w-9 mr-3" /> 文章归纳</h3>

                <Accordion
                    className="[&>hr]:bg-[#eee] !px-0"
                    motionProps={{
                        variants: {
                            enter: {
                                y: 0,
                                opacity: 1,
                                height: "auto",
                                transition: {
                                    height: {
                                        type: "spring",
                                        stiffness: 500,
                                        damping: 30,
                                        duration: 1,
                                    },
                                    opacity: {
                                        easings: "ease",
                                        duration: 1,
                                    },
                                },
                            },
                            exit: {
                                y: -10,
                                opacity: 0,
                                height: 0,
                                transition: {
                                    height: {
                                        easings: "ease",
                                        duration: 0.25,
                                    },
                                    opacity: {
                                        easings: "ease",
                                        duration: 0.3,
                                    },
                                },
                            },
                        },
                    }}
                >
                    {
                        list.map((item, index) => (
                            <AccordionItem key={index} aria-label={item.year + '年'} title={<Title data={item} />}>
                                {
                                    Object.keys(item.month).map(month => (
                                        <div className="ml-3">
                                            <div className="relative border-l border-gray-300">
                                                <div className="mb-8 ml-4">
                                                    <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 border border-white"></div>
                                                    <div className="ml-6">
                                                        <div className="flex items-center space-x-4">
                                                            <div className="text-2xl text-gray-600">{month}月 {((item.month[month].wordCount / 1000) > 10) && '🔥'}</div>
                                                            <div>{item.month[month].total}篇文章</div>
                                                            <div>{(item.month[month].wordCount / 1000).toFixed(2)}K字</div>
                                                        </div>

                                                        {
                                                            item.month[month].list.map((article: Article) => (
                                                                <div className="group flex justify-between py-2">
                                                                    <Link href={`/article/${article.id}`} target="_blank" className="group-hover:text-primary transition-colors">{article.title}</Link>
                                                                    <span className="flex items-center min-w-24 text-sm text-white group-hover:text-gray-400 transition-colors"><AiOutlineEye className="mr-1"/>{article.view}</span>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </AccordionItem>
                        ))
                    }
                </Accordion>
            </div>
        </>
    )
}