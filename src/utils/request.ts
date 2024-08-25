const url = "http://localhost:9999/api"

export default async <T>(api: string, data?: any) => {
    const res = await fetch(`${url}${api}`, data)
    return res.json() as Promise<Response<T>>;
}