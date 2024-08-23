const url = "http://localhost:9999/api"

export default async <T>(api: string) => {
    const res = await fetch(`${url}${api}`)
    return res.json() as Promise<Response<T>>;
}