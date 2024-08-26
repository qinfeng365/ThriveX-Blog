const url = "http://localhost:9999/api"

export default async <T>(method: string, api: string, data?: any) => {
    const res = await fetch(`${url}${api}`, {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        [method === "POST" ? "body" : ""]: data ? JSON.stringify(data) : JSON.stringify({})
    })
    
    return res.json() as Promise<Response<T>>;
}