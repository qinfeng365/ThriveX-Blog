"use client"

import { useRouter } from "next/navigation"
import { Pagination } from "@nextui-org/react"

export default ({ total, page, className }: { total: number, page: number, className?: string }) => {
    const router = useRouter()

    return (
        <>
            <div className={className}>
                <Pagination
                    showControls
                    total={total}
                    page={page}
                    onChange={(page) => router.push(`?page=${page}`)}
                    classNames={{ item: "shadow-none bg-transparent" }}
                />
            </div>
        </>
    )
}