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

const btn = "group w-full py-4 mx-3 border hover:border-primary hover:bg-[#f8fbff] transition rounded-md space-y-3"
const p = "group-hover:text-primary text-xl text-center transition-colors"

const UpAndDown = ({ id, prev, next }: Props) => {

    return (
        <div className='UpAndDownComponent'>
            <div className="flex justify-between mt-8">
                <Link href={`/article/${prev ? prev.id : id}`} className={btn}>
                    <p className={p}>上一篇</p>
                    <p className='text-center transition-colors'>{prev ? prev.title : '没有上一篇文章了~'}</p>
                </Link>

                <Link href={`/article/${next ? next.id : id}`} className={btn}>
                    <p className={p}>下一篇</p>
                    <p className='text-center transition-colors'>{next ? next.title : '没有下一篇文章了~'}</p>
                </Link>
            </div>
        </div>
    );
};

export default UpAndDown;
