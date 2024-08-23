const url = "http://localhost:9999/api"

export default async (api: string) => {
    const res = await fetch(`${url}${api}`)
    return res.json()
}