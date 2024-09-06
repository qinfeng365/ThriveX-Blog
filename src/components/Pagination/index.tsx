"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Pagination } from "@nextui-org/react"

export default ({ total, page, className }: { total: number, page: number, className?: string }) => {
    const router = useRouter()
    // const searchParams = useSearchParams()
    // const query = new URLSearchParams(searchParams).toString()
    
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