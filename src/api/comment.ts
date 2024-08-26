import Request from "@/utils/request";
import { Comment } from "@/types/app/comment";

// 新增评论
export const addCommentDataAPI = async (id: number, data: Comment) => {
    return await Request<string>("POST", `/comment/${id}`, data);
}

// 获取评论列表
export const getCommentListAPI = async () => {
    return await Request<Paginate<Comment[]>>("POST", `/comment/paging`);
}

// 获取当前文章中所有评论
export const getArticleCommentListAPI = async (aid: number) => {
    return await Request<Paginate<Comment[]>>("POST", `/comment/article/${aid}`);
}