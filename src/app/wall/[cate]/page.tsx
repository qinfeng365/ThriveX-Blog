import Link from 'next/link';
import { MdOutlineAdd } from "react-icons/md";
import dayjs from 'dayjs';
// import Pagination from '@/components/Pagination';
import { getCateListAPI, getCateWallListAPI, addWallDataAPI } from "@/api/wall";

interface Props {
    params: { cate: string };
}

export default async ({ params }: Props) => {
    const cate = params.cate
    const active = "!text-primary !border-primary"

    // 提前把颜色写好，否则会导致样式丢失
    const colors = ["bg-[#fcafa24d]", "bg-[#a8ed8a4d]", "bg-[#caa7f74d]", "bg-[#ffe3944d]", "bg-[#92e6f54d]"]

    const { data: cateList } = await getCateListAPI()

    const id = cateList.find(item => item.mark === cate)?.id!
    const { data: tallList } = await getCateWallListAPI(id)

    return (
        <>
            <div className='bg-white py-16 border-b'>
                <div className="flex flex-col items-center">
                    <h2 className="text-5xl pt-24">留言墙</h2>
                    <p className="text-sm text-gray-600 my-10">有什么想对我说的，来吧</p>
                </div>

                <ul className="flex justify-center text-sm">
                    {
                        cateList.map(item => (
                            <li key={item.id} className={`py-2 px-4 mx-1 dark:text-[#8c9ab1] border-2 border-transparent rounded-full hover:!text-primary hover:border-primary ${item.mark === cate ? active : ''} transition-colors`}>
                                <Link href={`/wall/${item.mark}`}>{item.name}</Link>
                            </li>
                        ))
                    }
                </ul>

                <div className='w-[1200px] mx-auto mt-12 grid grid-cols-4 gap-4'>
                    {
                        tallList.result.map(item => (
                            <div key={item.id} className={`flex flex-col py-2 px-4 bg-[${item.color}] rounded-lg hover:-mt-4 transition-all`}>
                                <div className='flex justify-between items-center mt-2 text-xs text-gray-500 dark:text-[#8c9ab1]'>
                                    <span>{dayjs(+item.createTime!).format('YYYY-MM-DD HH:mm')}</span>
                                    <span>{item.cate.name}</span>
                                </div>

                                <div className='overflow-auto h-32 text-sm my-4 text-gray-700 dark:text-[#cecece]'>{item.content}</div>

                                <div className='text-end dark:text-[#A0A0A0]'>{item.name ? item.name : "匿名"}</div>
                            </div>
                        ))
                    }
                </div>

                {/* <Pagination total={data.pages} page={page} className="flex justify-center mt-5" /> */}

                <div className='fixed bottom-[5%] right-[5%] flex justify-center items-center w-[70px] h-[70px] rounded-full bg-black-b cursor-pointer z-50'>
                    <MdOutlineAdd className='text-white text-5xl' />
                </div>
            </div>
        </>
    )
}