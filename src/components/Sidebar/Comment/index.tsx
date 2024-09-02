import Image from 'next/image'
import Link from 'next/link';
import { getCommentListAPI } from '@/api/comment';
import Comment from '@/assets/svg/other/comments.svg'
import RandomAvatar from '@/components/RandomAvatar';
import dayjs from 'dayjs';
import './index.scss';

const NewComments = async () => {
    const { data } = await getCommentListAPI()
    
    return (
        <div className='SidebarCommentComponent'>
            <div className="newComments">
                <div className="title">
                    <Image src={Comment} alt="最新评论" /> 最新评论
                </div>

                <div className="list">
                    {data?.result.map((item) => (
                        <Link href="/" className="item" key={item.id}>
                            {
                                item.avatar
                                    ? <img src={item.avatar} className="avatar" alt="avatar" />
                                    : <RandomAvatar className='avatar' />
                            }
                            
                            <div className="content">
                                <div className="info">{item.content}</div>
                                <div className="time">{dayjs(+item.createTime!).format('YYYY-MM-DD HH:mm')}</div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewComments;
