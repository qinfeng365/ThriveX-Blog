import dayjs from 'dayjs';
import Link from 'next/link';
import { randomImage } from '@/utils';
import { Article } from '@/types/app/article';
import "./index.scss"

import { RiFireLine } from "react-icons/ri";
import { IoTimeOutline } from "react-icons/io5";
import { GoTag } from "react-icons/go";
import Empty from '@/components/Empty';
import Show from '@/components/Show';

interface ClassicsProps {
    data: Paginate<Article[]>;
}

const Classics = ({ data }: ClassicsProps) => {
    return (
        <div className='ClassicsComponent'>
            <div className="space-y-4">
                {data?.result?.map((item, index) => (
                    <div className="relative overflow-hidden flex h-[170px] md:h-60 lg:h-52 xl:h-60 bg-black-b tw_container" key={item.id}>
                        {index % 2 === 0 && (
                            <div
                                className="relative w-[45%] bg-cover bg-no-repeat bg-center scale-100 z-10 transition-all hover:scale-125 hidden sm:block"
                                style={{
                                    clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0 100%)',
                                    backgroundImage: `url(${item.cover || randomImage()})`,
                                }}
                            />
                        )}

                        <div className="relative w-full sm:w-[65%] py-5 px-5 sm:px-10 z-20">
                            <Link href={`/article/${item.id}`} className='flex flex-col justify-between h-full text-center sm:text-start'>
                                <h3 className='relative w-full sm:pt-2.5 pb-2.5 sm:pb-5 text-white text-lg md:text-xl lg:text-[22px] xl:text-2xl overflow-hidden whitespace-nowrap overflow-ellipsis'>{item.title}</h3>
                                <p className='text-[#cecece] text-sm sm:text-[15px] leading-7 sm:indent-8 line-clamp-2 sm:line-clamp-3'>{item.description}</p>

                                <div className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} pt-5 text-end space-x-4 sm:space-x-8`}>
                                    <div className='flex items-center sm:pl-8 text-xs text-white'>
                                        <span className='pr-1'><IoTimeOutline className='p-1 mt-[-2px] mr-[3px] text-[23px] text-white rounded-full align-middle bg-[#539dfd]' /></span>
                                        <span>{dayjs(+item.createTime!).format('YYYY-MM-DD')}</span>
                                    </div>

                                    <div className='flex items-center text-xs text-white'>
                                        <span className='pr-1'><RiFireLine className='p-1 mt-[-2px] mr-[3px] text-[23px] text-white rounded-full align-middle bg-[#eb373a]' /></span>
                                        <span>{item.view}</span>
                                    </div>

                                    <div className='flex items-center text-xs text-white'>
                                        <span className='pr-1'><GoTag className='p-1 mt-[-2px] mr-[3px] text-[23px] text-white rounded-full align-middle bg-[#f5a630]' /></span>
                                        <span>{item.cateList[0]?.name}</span>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div
                            className="absolute w-full h-60 bg-cover bg-center"
                            style={{
                                filter: 'blur(2.5rem) brightness(0.6)',
                                backgroundImage: `url(${item.cover || randomImage()})`
                            }}
                        />

                        {index % 2 !== 0 && (
                            <div
                                className="relative w-[45%] bg-cover bg-no-repeat bg-center scale-100 z-10 transition-all hover:scale-125 hidden sm:block"
                                style={{
                                    clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0 100%)',
                                    backgroundImage: `url(${item.cover || randomImage()})`,
                                }}
                            />
                        )}
                    </div>
                ))}

                <Show is={!data?.total} children={<Empty info="暂无文章" />}></Show>
            </div>
        </div>
    );
};

export default Classics;