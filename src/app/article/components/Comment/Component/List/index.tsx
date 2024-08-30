import Show from '@/components/Show';
import Empty from '@/components/Empty';
import RandomAvatar from '@/components/RandomAvatar';
import { Comment } from '@/types/app/comment'
import { RiMessage3Line } from "react-icons/ri";
import dayjs from 'dayjs';
import "./index.scss"
import Link from 'next/link';

interface Props {
    id: number,
    list: Comment[],
    reply: (id: number, name: string) => void
}

const CommentList = ({ list, reply }: Props) => {
    // 获取评论
    const replyComment = (id: number, name: string) => {
        console.log(id, name);
        reply(id, name)
    }

    return (
        <div className='CommentComponent'>
            <Show is={!!list?.length} children={
                <ul className="list">
                    {list?.map(one => (
                        <li className="item" key={one.id}>
                            <div className="comment_user_one">
                                {
                                    one.avatar
                                        ? <img src={one.avatar} alt="" className="avatar" />
                                        : <RandomAvatar className="avatar" />
                                }

                                <div className="comment_user_one_info">
                                    {
                                        one.url
                                            ? <a href={one.url} className="name active" target="_blank" rel="noopener noreferrer">{one.name}</a>
                                            : <span className="name">{one.name}</span>
                                    }
                                    <span className="time">{dayjs(+one.createTime).format('YYYY-MM-DD HH:mm')}</span>
                                </div>

                                <div className="reply" onClick={() => replyComment(one.id!, one.name)}>
                                    <RiMessage3Line />
                                </div>
                            </div>

                            <div className="comment_main">{one.content}</div>

                            {one?.children?.length ? (
                                one.children.map(two => (
                                    <div className="comment_user_two" key={two.id}>
                                        <div className="comment_user_two_info">
                                            {
                                                two.avatar
                                                    ? <img src={two.avatar} alt="" className="avatar" />
                                                    : <RandomAvatar className="avatar" />
                                            }

                                            {two.url ? (
                                                <a href={two.url} className="name active" target="_blank" rel="noopener noreferrer">
                                                    {two.name}
                                                </a>
                                            ) : (
                                                <span className="name">{two.name}</span>
                                            )}

                                            <span className="time">{dayjs(+two.createTime).format('YYYY-MM-DD HH:mm')}</span>
                                            <div className="reply" onClick={() => replyComment(two.id!, two.name)}>
                                                <RiMessage3Line />
                                            </div>
                                        </div>

                                        <div className="comment_main">
                                            <Link href="#">@{one.name}：</Link>
                                            <span>{two.content}</span>
                                        </div>

                                        {two.children?.map(three => (
                                            <div className="comment_user_three" key={three.id}>
                                                <div className="comment_user_three_info">
                                                    {
                                                        three.avatar
                                                            ? <img src={three.avatar} alt="" className="avatar" />
                                                            : <RandomAvatar className="avatar" />
                                                    }

                                                    {three.url ? (
                                                        <a href={three.url} className="name active" target="_blank" rel="noopener noreferrer">
                                                            {three.name}
                                                        </a>
                                                    ) : (
                                                        <span className="name">{three.name}</span>
                                                    )}

                                                    <span className="time">{dayjs(+three.createTime).format('YYYY-MM-DD HH:mm')}</span>

                                                    <div className="reply" onClick={() => replyComment(three.id!, three.name)}>
                                                        <RiMessage3Line />
                                                    </div>
                                                </div>

                                                <div className="comment_main">
                                                    <Link href="#">@{two.name}：</Link>
                                                    <span>{three.content}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ))
                            ) : null}
                        </li>
                    ))}
                </ul>
            } />

            <Show is={!list?.length} children={<Empty info='评论列表为空~'></Empty>} />
        </div >
    );
};

export default CommentList;
