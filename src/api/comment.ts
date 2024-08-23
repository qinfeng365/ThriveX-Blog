import Request from "@/utils/request";
import { Comment } from "@/types/app/comment";

// 获取评论列表
export const getCommentListAPI = async () => {
    return await Request<Paginate<Comment[]>>("/comment");
}