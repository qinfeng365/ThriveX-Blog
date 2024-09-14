const url = "http://localhost:9999/api"

export default async <T>(method: string, api: string, data?: any) => {
    const res = await fetch(`${url}${api}`, {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        [method === "POST" ? "body" : ""]: JSON.stringify(data ? data : {})
    })
    
    return res.json() as Promise<Response<T>>;
}