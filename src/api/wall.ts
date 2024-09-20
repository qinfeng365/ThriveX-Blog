import Request from "@/utils/request";
import { Wall } from "@/types/app/wall";

// 新增留言
export const addWallDataAPI = async (data: Wall) => {
    return await Request<string>("POST", `/wall`, data);
}

// 获取留言列表
export const getWallListAPI = async () => {
    return await Request<Paginate<Wall[]>>("POST", `/wall/paging`);
}

// 获取当前分类中所有留言
export const getArticleWallListAPI = async (cateId: number) => {
    return await Request<Paginate<Wall[]>>("GET", `/wall/cate/${cateId}`);
}