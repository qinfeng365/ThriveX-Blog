import Image from 'next/image'
import { getCommentListAPI } from '@/api/comment';
import dayjs from 'dayjs';
import './index.scss';
import Comment from '@/assets/svg/other/comments.svg'

const NewComments = async () => {
    const { data: { result } } = await getCommentListAPI()

    return (
        <div className='CommentComponent'>
            <div className="newComments">
                <div className="title">
                    <Image src={Comment} alt="最新评论" /> 最新评论
                </div>

                <div className="list">
                    {result.map((item) => (
                        <a href="javascript:;" className="item" key={item.id}>
                            <img src={item.avatar} className="avatar" alt="avatar" />
                            <div className="content">
                                <div className="info">{item.content}</div>
                                <div className="time">{dayjs(+item.createTime!).format('YYYY-MM-DD HH:mm')}</div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewComments;
