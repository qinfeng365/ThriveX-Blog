import Request from "@/utils/request";
import { Web } from "@/types/app/web";

// 获取网站列表
export const getWebListAPI = async () => {
    return await Request<Web[]>("POST", `/link/list`);
}