'use client'

import Image from 'next/image'
import NotFoundSvg from '@/assets/svg/other/404.svg'

export default function NotFound() {
  return (
    <>
      <div className="w-full h-[7vh] bg-zinc-300 dark:bg-gray-700"></div>
      <div className="w-full h-[73vh] my-auto">
        <div className="w-full h-full flex justify-center items-center flex-wrap">
          <div>
            <Image src={NotFoundSvg} alt="404" className='w-[40rem] min-w-[20rem]' />
          </div>
          <div>
            <h1 className='text-8xl font-bold'>404</h1>
            <h2 className='text-3xl font-bold my-4'>Page not found</h2>
            <p>The page you are looking for does not exist or has been removed.</p>
          </div>
        </div>
      </div>
    </>
  );
}