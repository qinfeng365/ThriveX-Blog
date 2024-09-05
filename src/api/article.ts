import Request from "@/utils/request";
import { Article } from "@/types/app/article";

// 获取指定文章数据
export const getArticleDataAPI = async (id: number) => {
    return await Request<Article>("GET", `/article/${id}`);
}

// 获取文章列表
export const getArticleListAPI = async (pagination: Page) => {
    return await Request<Paginate<Article[]>>("POST", `/article/paging?page=${pagination.page}&size=${pagination.size}`);
}

// 获取随机文章列表
export const getRandomArticleListAPI = async () => {
    return await Request<Article[]>("GET", "/article/random");
}

// 获取推荐文章列表
export const getRecommendedArticleListAPI = async () => {
    return await Request<Article[]>("GET", "/article/hot");
}