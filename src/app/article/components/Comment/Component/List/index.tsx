import { useEffect, useState } from 'react';
import { getCommentListAPI } from '@/api/comment';
import { Comment } from '@/types/app/comment'
import Show from '@/components/Show';
import dayjs from 'dayjs';
import "./index.scss"
import RandomAvatar from '@/components/RandomAvatar';

interface Props {
    id: number,
    addCommit?: boolean;
    replyCommit?: (data: { id: number; name: string }) => void;
}

const CommentList = ({ id, addCommit, replyCommit }: Props) => {
    const [list, setList] = useState<Comment[]>([])

    const getCommentList = async () => {
        const { data } = await getCommentListAPI(+id!);
        setList(data.result)
    }

    useEffect(() => {
        getCommentList()
    }, [])

    // useEffect(() => {
    //     if (isPublish) {
    //         getCommentData();
    //     }
    // }, [isPublish, getCommentData]);

    // useEffect(() => {
    //     setLoading(true);
    //     // Simulate fetching data based on paging
    //     setLoading(false);
    // }, [paging]);

    // const reply = (id: number, name: string) => {
    //     const content = document.querySelector(".frame .ipt") as HTMLDivElement;
    //     if (content) {
    //         content.focus();
    //     }
    //     onReply({ id, name });
    // };

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
                                    {one.url ? (
                                        <a href={one.url} className="name active" target="_blank" rel="noopener noreferrer">
                                            {one.name}
                                        </a>
                                    ) : (
                                        <span className="name">{one.name}</span>
                                    )}
                                    <span className="time">{dayjs(+one.createTime).format('YYYY-MM-DD HH:mm')}</span>
                                </div>

                                {/* <div className="reply" onClick={() => reply(one.id, one.name)}>回复</div> */}
                                <div className="reply">回复</div>
                            </div>

                            <div className="comment_main">{one.content}</div>

                            {/* {one?.children?.length ? (
                                one.children.map(two => (
                                    <div className="comment_user_two" key={two.id}>
                                        <div className="comment_user_two_info">
                                            <img src={two.avatar} className="avatar_two" alt="" />
                                            {two.url ? (
                                                <a href={two.url} className="name active" target="_blank" rel="noopener noreferrer">
                                                    {two.name}
                                                </a>
                                            ) : (
                                                <span className="name">{two.name}</span>
                                            )}
                                            <span className="time">{moment(two.createtime).format('YYYY-MM-DD HH:mm')}</span>
                                            <div className="reply" onClick={() => reply(two.id, two.name)}>回复</div>
                                        </div>

                                        <div className="comment_main">
                                            <a href="javascript:;">@{one.name}：</a>
                                            <span>{two.content}</span>
                                        </div>

                                        {two.children?.map(three => (
                                            <div className="comment_user_three" key={three.id}>
                                                <div className="comment_user_three_info">
                                                    <img src={three.avatar} className="avatar_three" alt="" />
                                                    {three.url ? (
                                                        <a href={three.url} className="name active" target="_blank" rel="noopener noreferrer">
                                                            {three.name}
                                                        </a>
                                                    ) : (
                                                        <span className="name">{three.name}</span>
                                                    )}
                                                    <span className="time">{moment(three.createtime).format('YYYY-MM-DD HH:mm')}</span>
                                                    <div className="reply" onClick={() => reply(two.id, three.name)}>回复</div>
                                                </div>
                                                <div className="comment_main">
                                                    <a href="javascript:;">@{two.name}：</a>
                                                    <span>{three.content}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ))
                            ) : null} */}
                        </li>
                    ))}
                </ul>
            }></Show>

            {/* <div className="void">
                <img src={require('@/assets/svg/other/empty.svg').default} alt="" />
                <p>空空如也~</p>
            </div> */}
        </div >
    );
};

export default CommentList;
