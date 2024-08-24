import Starry from "@/components/Starry"
import Swiper from "@/components/Swiper"
import { getArticleDataAPI } from '@/api/article'
import Vditor from "@/components/Vditor";

interface Props {
    params: { id: number };
};

export default async ({ params }: Props) => {
    const id = params.id
    const { data } = await getArticleDataAPI(id)

    return (
        <>
            <div>
                <Swiper>
                    {/* 星空背景组件 */}
                    <Starry />
                </Swiper>

                <Vditor data={data.content}></Vditor>
            </div>
        </>
    )
}