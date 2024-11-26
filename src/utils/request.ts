// const url = "http://localhost:9003/api"

// 最新调整：在 .env 文件中配置项目后端 API 地址
const url = process.env.NEXT_PUBLIC_PROJECT_API

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