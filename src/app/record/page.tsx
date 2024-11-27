import Image from "next/image"
import ImageList from "./components/ImageList"

export default () => {
  return (
    <>
      <div className="w-full lg:w-[800px] px-6 lg:px-0 mx-auto pt-24 pb-10">
        <div className="flex items-center flex-col p-4 mb-10 border dark:border-black-b rounded-lg bg-white dark:bg-black-b bg-[url('https://bu.dusays.com/2024/11/27/6746e3ec88c4f.jpg')] bg-no-repeat bg-center bg-cover transition-colors">
          <Image src="https://q1.qlogo.cn/g?b=qq&nk=3311118881&s=640" alt="作者头像" width={80} height={80} className="rounded-full avatar-animation shadow-[5px_11px_30px_20px_rgba(255,255,255,0.3)]" />
          <h2 className="my-2 text-white">👋 Liu 宇阳</h2>
          <h4 className="text-xs text-gray-300">🎯 梦想做一名技术顶尖的架构师，奈何学历太低！</h4>
        </div>

        <div className="space-y-12">
          <div className="flex flex-col sm:flex-row">
            <Image src="https://q1.qlogo.cn/g?b=qq&nk=3311118881&s=640" alt="作者头像" width={56} height={56} className="hidden sm:block rounded-lg border dark:border-black-b h-14 mr-2 transition-colors" />

            <div className="flex sm:hidden">
              <Image src="https://q1.qlogo.cn/g?b=qq&nk=3311118881&s=640" alt="作者头像" width={44} height={44} className="rounded-lg border dark:border-black-b h-11 mr-2 transition-colors" />

              <div className="flex sm:hidden items-center my-1.5 ml-2 space-x-4">
                <h3>宇阳</h3>
                <span className="text-xs">3天前</span>
              </div>
            </div>

            <div className="mt-2 sm:mt-0">
              <div className="hidden sm:flex items-center my-1.5 ml-4 space-x-4">
                <h3>宇阳</h3>
                <span className="text-xs">3天前</span>
              </div>

              <div className="w-full p-4 border dark:border-black-b rounded-3xl rounded-tl-none bg-white dark:bg-black-b transition-colors">
                <p className="text-gray-600 dark:text-white transition-colors">
                  🎉 ThriveX 是一个 Next14 + Spring Boot 的产物，该项目专注于分享技术文章和知识，为技术爱好者和从业者提供一个分享、交流和学习的平台。用户可以在平台上发表自己的技术文章，或浏览其他用户分享的文章，并与他们进行讨论和互动。
                </p>

                <ImageList />
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row">
            <Image src="https://q1.qlogo.cn/g?b=qq&nk=3311118881&s=640" alt="作者头像" width={56} height={56} className="hidden sm:block rounded-lg border dark:border-black-b h-14 mr-2 transition-colors" />

            <div className="flex sm:hidden">
              <Image src="https://q1.qlogo.cn/g?b=qq&nk=3311118881&s=640" alt="作者头像" width={44} height={44} className="rounded-lg border dark:border-black-b h-11 mr-2 transition-colors" />

              <div className="flex sm:hidden items-center my-1.5 ml-2 space-x-4">
                <h3>宇阳</h3>
                <span className="text-xs">3天前</span>
              </div>
            </div>

            <div className="mt-2 sm:mt-0">
              <div className="hidden sm:flex items-center my-1.5 ml-4 space-x-4">
                <h3>宇阳</h3>
                <span className="text-xs">3天前</span>
              </div>

              <div className="w-full p-4 border dark:border-black-b rounded-3xl rounded-tl-none bg-white dark:bg-black-b transition-colors">
                <p className="text-gray-600 dark:text-white transition-colors">
                  🎉 ThriveX 是一个 Next14 + Spring Boot 的产物，该项目专注于分享技术文章和知识，为技术爱好者和从业者提供一个分享、交流和学习的平台。用户可以在平台上发表自己的技术文章，或浏览其他用户分享的文章，并与他们进行讨论和互动。
                </p>

                <ImageList />
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row">
            <Image src="https://q1.qlogo.cn/g?b=qq&nk=3311118881&s=640" alt="作者头像" width={56} height={56} className="hidden sm:block rounded-lg border dark:border-black-b h-14 mr-2 transition-colors" />

            <div className="flex sm:hidden">
              <Image src="https://q1.qlogo.cn/g?b=qq&nk=3311118881&s=640" alt="作者头像" width={44} height={44} className="rounded-lg border dark:border-black-b h-11 mr-2 transition-colors" />

              <div className="flex sm:hidden items-center my-1.5 ml-2 space-x-4">
                <h3>宇阳</h3>
                <span className="text-xs">3天前</span>
              </div>
            </div>

            <div className="mt-2 sm:mt-0">
              <div className="hidden sm:flex items-center my-1.5 ml-4 space-x-4">
                <h3>宇阳</h3>
                <span className="text-xs">3天前</span>
              </div>

              <div className="w-full p-4 border dark:border-black-b rounded-3xl rounded-tl-none bg-white dark:bg-black-b transition-colors">
                <p className="text-gray-600 dark:text-white transition-colors">
                  🎉 ThriveX 是一个 Next14 + Spring Boot 的产物，该项目专注于分享技术文章和知识，为技术爱好者和从业者提供一个分享、交流和学习的平台。用户可以在平台上发表自己的技术文章，或浏览其他用户分享的文章，并与他们进行讨论和互动。
                </p>

                <ImageList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}