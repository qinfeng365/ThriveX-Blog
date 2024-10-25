import { useEffect, useState } from 'react'
import { getTagListAPI } from '@/api/Tag'
import { Tag } from '@/types/app/tag'
import { getRandom } from '@/utils'

export default () => {
    const [list, setList] = useState<Tag[]>([])
    const getTagData = async () => {
        const { data } = await getTagListAPI()
        setList(data)
    }

    useEffect(() => {
        getTagData()
    }, [])

    const colors = [
        {
            color: "#0d6efd",
            backgroundColor: "rgba(13, 110, 253, .2)"
        },
        {
            color: "#6610f2",
            backgroundColor: "rgba(102, 16, 242, .2)"
        },
        {
            color: "#20c997",
            backgroundColor: "rgba(32, 201, 151, .2)"
        },
        {
            color: "#dc3545",
            backgroundColor: "rgba(220, 53, 69, .2)"
        },
        {
            color: "#fd7e14",
            backgroundColor: "rgba(253, 126, 20, .2)"
        }
    ]

    return (
        <>
            <div className='overflow-auto h-[270px] pr-1 grid grid-cols-6 gap-2 hide_sliding'>
                {
                    list.map(item => {
                        const { color, backgroundColor } = colors[getRandom(0, colors.length - 1)]
                        return <span className='flex justify-center items-center px-4 h-8 text-xs rounded-md line-clamp-1' style={{ color, backgroundColor }}>{item.name}</span>
                    })
                }
            </div>
        </>
    )
}