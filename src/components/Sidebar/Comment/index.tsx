import Image from 'next/image';
import Link from 'next/link';
import { getCommentListAPI } from '@/api/comment';
import Comment from '@/assets/svg/other/comments.svg';
import RandomAvatar from '@/components/RandomAvatar';
import dayjs from 'dayjs';
import './index.scss';

const NewComments = async () => {
    const { data } = await getCommentListAPI();

    return (
        <div className='SidebarCommentComponent'>
            <div className="flex flex-col tw_container bg-white dark:bg-black-b p-4 mb-5 tw_title">
                <div className="tw_title w-full dark:text-white">
                    <Image src={Comment} alt="最新评论" width={33} height={23} /> 最新评论
                </div>

                <div className="mt-2.5">
                    {data?.result.map((item) => (
                        <Link href={`/article/${item.articleId}`} className="group flex items-center py-2.5 border-b dark:border-b-black-b transition-all last:border-b-0" key={item.id}>
                            {item.avatar
                                ? <img src={item.avatar} className="w-11 h-11 rounded-full mr-2.5 transition-all hover:scale-110" alt="avatar" />
                                : <RandomAvatar className='w-11 h-11 rounded-full mr-2.5 transition-all hover:scale-110' />
                            }

                            <div className="flex flex-col justify-center">
                                <div className="w-48 text-sm text-gray-600 dark:text-[#8c9ab1] transition-all group-hover:text-primary overflow-hidden line-clamp-2">
                                    {item.content}
                                </div>
                                <div className="pt-2.5 text-xs text-gray-400 transition-all">
                                    {dayjs(+item.createTime!).format('YYYY-MM-DD HH:mm')}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewComments;