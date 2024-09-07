import Image from "next/image";
import avatar from '@/assets/image/avatar.jpg'
import bg from '@/assets/image/bg.png'
import "./page.scss"
import Technology from "./component/Technology";

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
                <div className="w-6/12 mx-auto">
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

                {/* 技术栈 */}
                <div className="flex flex-col">
                    <div className="text-center text-xl mt-24 my-6">我的技术栈</div>

                    <img className="min-h-[240px]" src="https://skillicons.dev/icons?i=html,css,javascript,typescript,jquery,less,scss,tailwind,react,nextjs,remix,redux,vue,nuxt,pinia,electron,webpack,vite,npm,yarn,pnpm,md,git,github,java,spring,maven,python,flask,express,nodejs,nestjs,prisma,mysql,redis,vercel,docker,linux,vscode,idea,webstorm,pycharm,postman,ps" />
                </div>
            </div>
        </>
    )
}