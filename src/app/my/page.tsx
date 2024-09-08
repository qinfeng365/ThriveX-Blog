import Image from "next/image";
import avatar from '@/assets/image/avatar.jpg'
import bg from '@/assets/image/bg.png'
import INFJ from '@/assets/image/INFJ.png'
import dynamic from 'next/dynamic'
import { BiQuestionMark } from "react-icons/bi";
import { Progress, Tooltip } from "@nextui-org/react";
import "./page.scss"
import Link from "next/link";

const Map = dynamic(() => import('./component/Map'))
const Technology = dynamic(() => import('./component/Technology'))

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
        ]
    }

    // 提前把颜色写好，否则会导致样式丢失
    const colors = ["[&>div>div]:bg-[#4298b4]", "[&>div>div]:bg-[#e4ae3a]", "[&>div>div]:bg-[#33a474]", "[&>div>div]:bg-[#88619a]", "[&>div>div]:bg-[#f25e62]"]

    return (
        <>
            <div className="MyPage bg-white pt-[80px] bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${bg.src})` }}>
                {/* 个人介绍 */}
                <div className="w-7/12 mx-auto">
                    <div className="mt-16 transition-colors">
                        <div className="flex justify-between items-center">
                            <div className="w-6/12 text-[#353a40] transition-all duration-800">
                                <div className="text-4xl my-10 text-[#738bff]">I am <span className="name">{data.name}</span></div>
                                <div className="text-4xl my-10">{data.profession}</div>
                                <div className="text-[#666] font-heiti leading-8">{data.introduction}</div>
                            </div>

                            <div className="overflow-hidden w-[400px] h-[400px] rounded-full shadow-lg">
                                <Image src={data.avatar} alt={data.name} className="w-full h-full" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="character mt-14">
                    <div className="text-center text-xl mb-8">我的性格</div>

                    <div className="flex justify-center items-center">
                        <div className="mr-40">
                            <div className="text-[40px] text-[#33a474] font-medium font-sans">提倡者</div>
                            <div className="text-[#666]">INFJ</div>
                            <Image src={INFJ} alt="性格" width={200}></Image>
                            <Link href="https://www.16personalities.com/ch/infj-人格" className="block w-full mt-2 text-center text-[#666] text-xs hover:text-[#33a474]">了解一下</Link>
                        </div>

                        <div className="w-[550px] space-y-10">
                            {
                                data.character.map(({ value, text1, text2, content, color }, index) => {
                                    return (
                                        <div key={index} className="flex justify-center items-center">
                                            <span className="min-w-20">{text1}</span>

                                            <div className="relative w-full max-w-md">
                                                <Progress
                                                    value={value}
                                                    className={`relative [&>div]:justify-center ${colors[index]}`}
                                                />
                                                <div className="absolute -top-[25px] -translate-x-1/2 left-0 h-full flex items-center justify-center" style={{ left: `${value}%` }}>
                                                    <span className={`flex items-center text-[${color}]`}>
                                                        {value}%
                                                        <Tooltip content={content}>
                                                            <BiQuestionMark className="w-5 h-5 ml-2 rounded-full p-[2px] bg-[#eee] cursor-pointer" />
                                                        </Tooltip>
                                                    </span>
                                                </div>
                                            </div>
                                            <span className="min-w-20 text-end">{text2}</span>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className="flex w-9/12 mt-14 mx-auto">
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
            </div>
        </>
    )
}