import Request from '@/utils/request'
import { Tag } from '@/types/app/tag'

// 获取标签列表
export const getTagListAPI = async () => {
    return await Request<Tag[]>("POST", `/tag/list`);
}

// 分页获取标签数据
export const getTagPagingAPI = async (data: QueryData) => {
    return await Request<Paginate<Tag[]>>("POST", `/tag/paging?page=${data.pagination?.page}&&size=8`, data.query);
}