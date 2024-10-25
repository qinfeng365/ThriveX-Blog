const url = "http://localhost:9003/api"
// const url = "https://api.liuyuyang.net/api"

export default async <T>(method: string, api: string, data?: any, caching = true) => {
    const res = await fetch(`${url}${api}`, {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        [method === "POST" ? "body" : ""]: JSON.stringify(data ? data : {}),
        // // 配置默认缓存时间，5分钟内重复访问不会重新请求接口
        next: { revalidate: caching ? 300 : 0 }

        // 不开启缓存
        // next: { revalidate: 0 }
    })

    return res.json() as Promise<ResponseData<T>>;
}

// [
//     {
//         year: 2024,
//         total: 3, // 结果是每个月份的total
//         month: [
//             {
//                 1: {
//                     total: 2, // 文章的数量
//                     list: [文章数据1, 文章数据2]
//                 },
//                 2: {
//                     total: 1,
//                     list: [文章数据1]
//                 },
//             }
//         ]
//     },
//     {
//         year: 2023,
//         total: 2, // 结果是每个月份的total
//         month: [
//             {
//                 1: {
//                     total: 1, // 文章的数量
//                     list: [文章数据1]
//                 },
//                 2: {
//                     total: 0,
//                     list: []
//                 },
//                 3: {
//                     total: 1,
//                     list: [文章数据1]
//                 }
//             }
//         ]
//     }
// ]