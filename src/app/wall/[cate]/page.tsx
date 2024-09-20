import Link from 'next/link';
import { MdOutlineAdd } from "react-icons/md";
import dayjs from 'dayjs';
import Pagination from '@/components/Pagination';

interface Props {
    params: { cate: string };
}

export default ({ params }: Props) => {
    const cate = params.cate
    const active = "!text-primary !border-primary"

    // 提前把颜色写好，否则会导致样式丢失
    const colors = ["bg-[#fcafa24d]", "bg-[#a8ed8a4d]", "bg-[#caa7f74d]", "bg-[#ffe3944d]", "bg-[#92e6f54d]"]

    const cateList = [
        {
            id: 1,
            name: "全部",
            path: "all",
        },
        {
            id: 2,
            name: "想对我说的话",
            path: "info",
        },
        {
            id: 3,
            name: "对我的建议",
            path: "suggest",
        },
        {
            id: 4,
            name: "反馈Bug",
            path: "bug",
        },
        {
            id: 5,
            name: "提个需求",
            path: "features",
        },
        {
            id: 6,
            name: "其他",
            path: "other",
        },
    ]

    const tallList = [
        {
            id: 1,
            name: "",
            cate: "全部",
            color: "#fcafa24d",
            content: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
            createTime: "1723533206613"
        },
        {
            id: 2,
            name: "神秘人",
            cate: "留言",
            color: "#a8ed8a4d",
            content: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
            createTime: "1723533206613"
        },
        {
            id: 3,
            name: "",
            cate: "建议",
            color: "#ffe3944d",
            content: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
            createTime: "1723533206613"
        }
    ]

    return (
        <>
            <div className="flex flex-col items-center mt-16">
                <h2 className="text-5xl pt-24">留言墙</h2>
                <p className="text-sm text-gray-600 my-10">有什么想对我说的，来吧</p>
            </div>

            <ul className="flex justify-center text-sm">
                {
                    cateList.map(item => (
                        <li key={item.id} className={`py-2 px-4 mx-1 dark:text-[#8c9ab1] border-2 border-transparent rounded-full hover:!text-primary hover:border-primary ${item.path === cate ? active : ''} transition-colors`}>
                            <Link href={`/wall/${item.path}`}>{item.name}</Link>
                        </li>
                    ))
                }
            </ul>

            <div className='w-[1200px] mx-auto mt-12 grid grid-cols-4 gap-4'>
                {
                    tallList.map(item => (
                        <div key={item.id} className={`flex flex-col py-2 px-4 bg-[${item.color}] rounded-lg hover:-mt-4 transition-all`}>
                            <div className='flex justify-between items-center mt-2 text-xs text-gray-500 dark:text-[#8c9ab1]'>
                                <span>{dayjs(+item.createTime!).format('YYYY-MM-DD HH:mm')}</span>
                                <span>{item.cate}</span>
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
        </>
    )
}