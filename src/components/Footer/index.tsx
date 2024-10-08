import Image from 'next/image'
import avatar from '@/assets/image/avatar.jpg'

export default () => {
  return (
    <>
      <div className="flex justify-center items-center mt-8 bg-white dark:bg-black-b border-t dark:border-black-b h-32 sm:h-36 xl:h-40 py-5 px-10 transition-colors">
        <Image src={avatar} alt='作者头像' className='w-24 h-24 rounded-full mr-8 avatar-animation shadow-[5px_11px_50px_40px_rgba(255,255,255,0.1)]' />
        <h2 className="w-[90%] xl:w-3/6 text-sm sm:text-base dark:text-[#8c9ab1] line-clamp-4">一直对网站开发领域很感兴趣，从小就希望有一个属于自己的网站，在17年时候成功进入站长圈，并通过各种自学，以及各种折腾，才有了你现在看到的这个网站</h2>
      </div>
    </>
  )
}