import Request from "@/utils/request";
import { Article } from "@/types/app/article";

// 获取文章列表
export const getArticleListAPI = async () => {
    return await Request<Paginate<Article[]>>("/article");
}

// 获取随机文章列表
export const getRandomArticleListAPI = async () => {
    return await Request<Article[]>("/article/random");
}

// 获取推荐文章列表
export const getRecommendedArticleListAPI = async () => {
    return await Request<Article[]>("/article/hot");
}