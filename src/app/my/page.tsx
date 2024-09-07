import Image from "next/image";
import avatar from '@/assets/image/avatar.jpg'
import bg from '@/assets/image/bg.png'
import dynamic from 'next/dynamic'
import "./page.scss"

const Map = dynamic(() => import('./component/Map'))
const Technology = dynamic(() => import('./component/Technology'))

export default () => {
    const data = {
        name: "Liu YuYang",
        avatar,
        profession: "一名Web全栈开发工程师",
        introduction: "我从小就对计算机编程技术有着无穷的兴趣，所以我的梦想是做一名技术顶尖的 架构师，因此我一直在朝着这个方向去努力、去坚持 直到梦想成真！",
    }

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