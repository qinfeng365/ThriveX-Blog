import Image from "next/image"
import ImageList from "./components/ImageList"

export default () => {
  return (
    <>
      <div className="w-[800px] mx-auto pt-24 pb-32 space-y-2">
        <div className="flex items-center flex-col p-4 mb-10 border rounded-lg bg-white dark:bg-black-b bg-[url('https://bu.dusays.com/2024/11/27/6746e3ec88c4f.jpg')] bg-no-repeat bg-center bg-cover">
          <Image src="https://q1.qlogo.cn/g?b=qq&nk=3311118881&s=640" alt="作者头像" width={80} height={80} className="rounded-full avatar-animation shadow-[5px_11px_30px_20px_rgba(255,255,255,0.3)]" />
          <h2 className="my-2 text-white">👋 Liu 宇阳</h2>
          <h4 className="text-xs text-gray-300">🎯 梦想做一名技术顶尖的架构师，奈何学历太低！</h4>
        </div>

        <div className="flex">
          <Image src="https://q1.qlogo.cn/g?b=qq&nk=3311118881&s=640" alt="作者头像" width={56} height={56} className="rounded-lg border h-14 mr-2" />

          <div>
            <div className="flex items-center my-1.5 ml-4 space-x-4">
              <h3>宇阳</h3>
              <span className="text-xs">3天前</span>
            </div>

            <div className="w-full p-4 border rounded-3xl rounded-tl-none bg-white dark:bg-black-b">
              <p className=" text-gray-600">
                今晚在写代码的过程中处理一些用户交互细节的时候有所思：

                在过去的几个月中我一直在全力开发 Follow 这个项目，出于热爱，出于对产品还有开源的热爱。想方设法的让它变得更好。以至于这样，在过去的几个月中我几乎没有停歇过，即便是休息日。还要去同事负责的模块，去修改那些细节问题，他们不注重的，好像等着我去处理了，我只是个 UI/UX 强迫症，看到不爽的就想改掉而已。但现在转念一想，我只是一个打工人罢了，我也不是 LD，我何必要管这么多，只是拿着一份死工资，以及等待着随时都有可能让你滚蛋的一句话。何必呢不如随他们一样，管好自己的一句三分地就好了。

                确实也是心累了。
              </p>

              <div className="flex justify-center mt-4">
                <ImageList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}