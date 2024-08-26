import Request from "@/utils/request";
import { Comment } from "@/types/app/comment";

// 新增评论
export const addCommentDataAPI = async (id: number, data: Comment) => {
    return await Request<string>("POST", `/comment/${id}`, data);
}

// 获取评论列表
export const getCommentListAPI = async () => {
    return await Request<Paginate<Comment[]>>("GET", "/comment");
}