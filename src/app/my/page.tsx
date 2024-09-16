import Image from "next/image";
import bg from '@/assets/image/bg.png'
import avatar from '@/assets/image/avatar.jpg'
import dynamic from 'next/dynamic'
import "./page.scss"
import { Checkbox } from "@nextui-org/react";
import Goals from "./component/Goals";

const Character = dynamic(() => import('./component/Character'))
const Map = dynamic(() => import('./component/Map'))
const Technology = dynamic(() => import('./component/Technology'))
const CurriculumVitae = dynamic(() => import('./component/CurriculumVitae'))

export default () => {
    const data = {
        name: "Liu YuYang",
        avatar,
        profession: "一名Web全栈开发工程师",
        introduction: "我从小就对计算机编程技术有着无穷的兴趣，所以我的梦想是做一名技术顶尖的 架构师，因此我一直在朝着这个方向去努力、去坚持 直到梦想成真！",
        character: [
            {
                value: 54,
                text1: "内向",
                text2: "外向",
                content: "内向型的人往往更喜欢较少但深入和有意义的社交互动，通常更喜欢安静的环境。",
                color: "#4298b4"
            },
            {
                value: 41,
                text1: "现实",
                text2: "有远见",
                content: "有远见型的人非常富有想象力、思想开放并充满好奇心。他们重视原创性，专注于隐含的意义和遥远的可能性。",
                color: "#e4ae3a"
            },
            {
                value: 41,
                text1: "感受",
                text2: "理性分析",
                content: "感受型的人重视情感表达和敏感性。他们非常重视同理心、社会和谐及合作。",
                color: "#33a474"
            },
            {
                value: 79,
                text1: "展望",
                text2: "评判",
                content: "评判型的人果断、周到，很有条理。他们重视清晰度、可预测性和封闭性，更喜欢结构和计划，而不是自发性。",
                color: "#88619a"
            },
            {
                value: 78,
                text1: "起伏不定",
                text2: "坚决",
                content: "起伏不定型的人自我意识强，对压力敏感。他们在情绪上有一种紧迫感，往往以成功为导向，追求完美，渴望进步。",
                color: "#f25e62"
            },
        ],
        goals: [
            {
                status: 3,
                value: "1、学习 React 达到找工作水平"
            },
            {
                status: 3,
                value: "2、学习 Nextjs 达到找工作水平"
            },
            {
                status: 3,
                value: "3、入手 MacBook 生产力神器"
            },
            {
                status: 1,
                value: "4、完成 ThriveX 项目重构"
            },
            {
                status: 1,
                value: "5、刷100道面试题"
            },
        ]
    }

    return (
        <>
            <div className="MyPage bg-white dark:bg-black-a pt-20 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${bg.src})` }}>
                {/* 个人介绍 */}
                <div className="w-7/12 mx-auto">
                    <div className="mt-16 transition-colors">
                        <div className="flex justify-between items-center">
                            <div className="w-6/12 text-[#353a40] dark:text-[#fff] transition-all duration-800">
                                <div className="text-4xl my-10 text-[#738bff]">I am <span className="name">{data.name}</span></div>
                                <div className="text-4xl my-10">{data.profession}</div>
                                <div className="text-[#666] dark:text-[#8c9ab1] font-heiti leading-8">{data.introduction}</div>
                            </div>

                            <div className="overflow-hidden w-[400px] h-[400px] rounded-full shadow-lg">
                                <Image src={data.avatar} alt={data.name} className="w-full h-full" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="character mt-14">
                    <div className="text-center text-xl mb-8">我的性格</div>

                    <Character data={data.character} />
                </div> */}

                <div className="flex w-9/12 m-28 mx-auto">
                    {/* 性格 */}
                    <div className="w-7/12 mr-20">
                        <div className="text-center text-xl mb-8">我的性格</div>

                        <Character data={data.character} />
                    </div>

                    {/* 目标墙 */}
                    <div className="w-5/12 flex flex-col">
                        <div className="text-center text-xl mb-2">2024年度目标</div>

                        <Goals data={data.goals} />
                    </div>
                </div>

                <div className="flex w-9/12 mt-28 mx-auto">
                    {/* 位置 */}
                    <div className="w-5/12 mr-20">
                        <div className="text-center text-xl mb-6">我的家乡</div>
                        <Map />
                    </div>

                    {/* 技术栈 */}
                    <div className="w-7/12 flex flex-col">
                        <div className="text-center text-xl mb-6">我的技术栈</div>
                        <Technology />
                    </div>
                </div>

                <div className="mt-14">
                    <CurriculumVitae />
                </div>
            </div>
        </>
    )
}