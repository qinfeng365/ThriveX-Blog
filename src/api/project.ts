import Request from "@/utils/request";

// 获取项目配置
export const getThemeDataAPI = <T>(type: string) => Request<T>("GET", `/config/list/${type}`)

// 修改项目配置
export const editThemeDataAPI = (type: string, data: object) => Request<{ [string: string]: string }>("PATCH", `/config/${type}`, { data })