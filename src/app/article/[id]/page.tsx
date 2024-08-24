import Starry from "@/components/Starry"
import Swiper from "@/components/Swiper"
import { getArticleDataAPI } from '@/api/article'
import ContentMd from "@/components/ContentMd";
import Tag from "../components/Tag";

interface Props {
    params: { id: number };
};

export default async ({ params }: Props) => {
    const id = params.id
    const { data } = await getArticleDataAPI(id)

    return (
        <>
            <div className="ArticlePage">
                <Swiper>
                    {/* 星空背景组件 */}
                    <Starry />
                </Swiper>

                <div className="w-[1200px] mx-auto relative -right-[6%]">
                    <ContentMd data={data.content}></ContentMd>

                    <Tag data={data.tagList} />
                </div>
            </div>
        </>
    )
}