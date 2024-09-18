import Image from "next/image";
import dynamic from 'next/dynamic'
import bg from '@/assets/image/bg.png'
import avatar from '@/assets/image/avatar.jpg'
import { MyData } from '@/types/app/my'

import Goals from './component/Goals'
import Character from './component/Character'
import Map from './component/Map'
import Technology from './component/Technology'
import Project from './component/Project'
import CurriculumVitae from './component/CurriculumVitae'

import "./page.scss"

export default () => {
    const data: MyData = {
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
        ],
        project: [
            {
                name: "ThriveX",
                images: [
                    "https://bu.dusays.com/2024/09/17/66e9704b2b809.png",
                    "https://bu.dusays.com/2024/09/17/66e97036dddcb.png",
                    "https://bu.dusays.com/2024/09/17/66e97035726ae.png",
                    "https://bu.dusays.com/2024/09/17/66e97031cd456.png"
                ],
                description: "🎉 ThriveX 相比 Thrive 的核心区别是采用了 Nextjs 服务端渲染技术进行重构，对SEO方面有了显著的提高。并且还新增了很多额外的功能...",
                front: {
                    technology: "Nextjs、TypeScript、Zustand、TailwindCSS、Scss、Echarts",
                    url: "https://github.com/LiuYuYang01/ThriveX-Blog"
                },
                control: {
                    technology: "React、Antd、TypeScript、Zustand、TailwindCSS、Echarts",
                    url: "https://github.com/LiuYuYang01/ThriveX-Admin"
                },
                backend: {
                    technology: "Spring Boot、Mybatis Plus、MySQL、Redis、Qiniu、Socket.io、Swagger",
                    url: "https://github.com/LiuYuYang01/ThriveX-Service"
                },
            },
            {
                name: "Thrive",
                images: [
                    "https://bu.dusays.com/2024/09/17/66e96cb4e8417.png",
                    "https://bu.dusays.com/2024/09/17/66e96ca366600.png",
                    "https://bu.dusays.com/2024/09/17/66e96ca781d49.png",
                    "https://bu.dusays.com/2024/09/17/66e96c9e76c81.png"
                ],
                description: "🎉 Thrive 是一个简而不简单的现代化博客管理系统，专注于分享技术文章和知识，为技术爱好者和从业者提供一个分享、交流和学习的平台。用户可以在平台上发表自己的技术文章，或浏览其他用户分享的文章，并与他们进行讨论和互动。",
                front: {
                    technology: "Vue3、TypeScript、Pinia、Element-plus、Scss、Echarts 、highlight.js",
                    url: "https://github.com/LiuYuYang01/Thrive_Blog"
                },
                control: {
                    technology: "Vue3、TypeScript、Pinia、Element-plus、Scss",
                    url: "https://github.com/LiuYuYang01/Thrive_Admin"
                },
                backend: {
                    technology: "Python、Flask、SQLAlchemy、MySQL、Flask-JWT、Socket.io、Swagger",
                    url: "https://github.com/LiuYuYang01/Thrive_Api_Py"
                },
            },
            {
                name: "云上校园",
                images: [
                    "https://bu.dusays.com/2024/09/18/66ea606eb5aa1.png",
                    "https://bu.dusays.com/2024/09/18/66ea605d89df7.png",
                    "https://bu.dusays.com/2024/09/18/66ea605ca9f0d.jpg",
                ],
                description: "🎉 云上校园是一个现代化大学生社交平台，该项目的立意是为了打造一个完整的校园生态圈，使校园触手可及!",
                front: {
                    technology: "微信小程序、Vant、Echarts、Autojs",
                    url: ""
                },
                control: {
                    technology: "Vue2、Element UI、vue-element-admin",
                    url: ""
                },
                backend: {
                    technology: "Nodejs、Eggjs、Socket.io、MySQL",
                    url: ""
                },
            },
        ]
    }

    return (
        <>
            <div className="MyPage bg-white dark:bg-black-a pt-20 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${bg.src})` }}>
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

                <div className="flex flex-col md:flex-row w-9/12 m-28 mx-auto">
                    <div className="w-full md:w-7/12 flex flex-col mr-0 md:mr-20">
                        <div className="text-center text-xl mb-8">我的性格</div>
                        <Character data={data.character} />
                    </div>

                    <div className="w-full md:w-5/12 flex flex-col mt-28 md:mt-0">
                        <div className="text-center text-xl mb-8">2024年度目标</div>
                        <Goals data={data.goals} />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row w-9/12 mt-28 mx-auto">
                    <div className="w-full md:w-5/12 flex flex-col mr-0 md:mr-20">
                        <div className="text-center text-xl mb-8">我的家乡</div>
                        <Map />
                    </div>

                    <div className="w-full md:w-7/12 flex flex-col mt-28 md:mt-0">
                        <div className="text-center text-xl mb-8">我的技术栈</div>
                        <Technology />
                    </div>
                </div>

                <div className="character mt-28">
                    <div className="text-center text-xl mb-8">我的开源项目</div>
                    <Project data={data.project} />
                </div>

                <div className="mt-14">
                    <CurriculumVitae />
                </div>
            </div>
        </>
    )
}