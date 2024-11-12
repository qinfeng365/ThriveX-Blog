import { getWebDataAPI } from '@/api/project';
import { getUserDataAPI } from '@/api/user';

export default async () => {
  const { data: { avatar } } = await getUserDataAPI()
  const { data: { footer } } = await getWebDataAPI()

  return (
    <>
      <div className="flex justify-center items-center mt-8 bg-white dark:bg-black-b border-t dark:border-black-b h-32 sm:h-36 xl:h-40 py-5 px-10 transition-colors">
        <img src={avatar} alt='作者头像' className='w-24 h-24 rounded-full mr-8 avatar-animation shadow-[5px_11px_50px_40px_rgba(255,255,255,0.1)]' />
        <h2 className="w-[90%] xl:w-3/6 text-sm sm:text-base dark:text-[#8c9ab1] line-clamp-4">{footer}</h2>
      </div>
    </>
  )
}