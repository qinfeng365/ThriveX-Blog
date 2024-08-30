import { Article } from '@/types/app/article'
import { Cate } from '@/types/app/cate'
import Request from '@/utils/request'

// 获取分类列表
export const getCateListAPI = async () => {
    return await Request<Cate[]>("POST", "/cate/list")
}

// 获取指定分类中的所有文章
export const getCateArticleListAPI = async (id: number) => {
    return await Request<Paginate<Article[]>>("GET", `/article/cate/${id}`)
}