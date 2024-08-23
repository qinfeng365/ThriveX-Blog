import Request from "@/utils/request";
import { Article } from "@/types/app/article";

// 获取文章列表
export const getArticleList = async () => {
    return await Request("/article");
}

// 获取随机文章列表
export const getRandomArticleList = async () => {
    return await Request<Article[]>("/article/random");
}