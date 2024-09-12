import React from 'react';
import Link from 'next/link';
import './index.scss';

interface info {
    id: number,
    title: string
};

interface Props {
    id: number,
    prev: info,
    next: info,
};

const btnSty = "group w-full py-4 border hover:border-primary hover:bg-[#f8fbff] dark:bg-black-b dark:border-black-b dark:hover:border-primary transition rounded-md"
const titleSty = "group-hover:text-primary text-xl text-center transition-colors"

export default ({ id, prev, next }: Props) => {
    return (
        <div className='UpAndDownComponent'>
            <div className="flex justify-between mt-8 space-x-3">
                <Link href={`/article/${prev ? prev.id : id}`} className={btnSty}>
                    <p className={titleSty}>上一篇</p>
                    <p className='text-center dark:text-[#8c9ab1] transition-colors mt-3'>{prev ? prev.title : '没有上一篇文章了~'}</p>
                </Link>

                <Link href={`/article/${next ? next.id : id}`} className={btnSty}>
                    <p className={titleSty}>下一篇</p>
                    <p className='text-center dark:text-[#8c9ab1] transition-colors mt-3'>{next ? next.title : '没有下一篇文章了~'}</p>
                </Link>
            </div>
        </div>
    );
};