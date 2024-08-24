import Starry from "@/components/Starry"
import Swiper from "@/components/Swiper"
import { getArticleDataAPI } from '@/api/article'
import ContentMd from "@/components/ContentMd";

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

                <ContentMd data={data.content}></ContentMd>
            </div>
        </>
    )
}