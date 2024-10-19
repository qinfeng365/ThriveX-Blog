"use client"

import { useRouter } from "next/navigation"
import { Pagination } from "@nextui-org/react"

interface Props {
    total: number,
    page: number,
    size?: number,
    path?: string,
    className?: string
}

export default ({ total, page, size = 5, path, className }: Props) => {
    const router = useRouter()

    return (
        <>
            <div className={className}>
                <Pagination
                    showControls
                    total={total}
                    page={+page}
                    onChange={(page) => router.push(path ? `${path}&page=${page}` : `?page=${page}`)}
                    classNames={{ item: "shadow-none bg-transparent dark:hover:!bg-black-b transition-colors", prev: "dark:bg-black-b transition-colors", next: "dark:bg-black-b transition-colors" }}
                />
            </div>
        </>
    )
}