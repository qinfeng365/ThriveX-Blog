import Starry from "@/components/Starry"
import Swiper from "@/components/Swiper"
import { getArticleDataAPI } from '@/api/article'
import ContentMd from "@/components/ContentMd";
import Tag from "../components/Tag";
import Copyright from "../components/Copyright";
import UpAndDown from "../components/UpAndDown";
import Comment from "../components/Comment";
import ContentNav from "@/components/ContentMd/component/ContentNav";

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

                <div className="w-6/12 mx-auto relative">
                    <ContentMd data={data?.content}></ContentMd>

                    <div className="w-full">
                        <Tag data={data?.tagList} />

                        <Copyright />
                        <UpAndDown id={id} prev={data?.prev} next={data?.next}/>
                        <Comment id={id}></Comment>
                    </div>
                </div>

                <ContentNav />
            </div>
        </>
    )
}