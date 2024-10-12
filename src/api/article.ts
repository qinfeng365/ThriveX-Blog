import Request from "@/utils/request";
import { Article } from "@/types/app/article";

// 获取指定文章数据
export const getArticleDataAPI = async (id: number) => {
    return await Request<Article>("GET", `/article/${id}`);
}

// 获取文章列表
export const getArticleListAPI = async (data: QueryData) => {
    return await Request<Paginate<Article[]>>("POST", `/article/paging?page=${data.pagination?.page}&&size=8`, data.query);
}

// 获取随机文章列表
export const getRandomArticleListAPI = async () => {
    return await Request<Article[]>("GET", "/article/random");
}

// 获取推荐文章列表
export const getRecommendedArticleListAPI = async () => {
    return await Request<Article[]>("GET", "/article/hot");
}

// 递增浏览量
export const recordViewAPI = async (id: number) => {
    return await Request<void>("GET", `/article/view/${id}`);
}