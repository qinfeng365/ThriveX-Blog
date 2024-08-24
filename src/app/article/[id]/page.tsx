import Starry from "@/components/Starry"
import Swiper from "@/components/Swiper"
import { getArticleDataAPI } from '@/api/article'
import ContentMd from "@/components/ContentMd";
import Tag from "../components/Tag";
import Copyright from "../components/Copyright";
import UpAndDown from "../components/UpAndDown";
import Comment from "../components/Comment";

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

                    <div className="w-[70%]">
                        <Tag data={data.tagList} />

                        <Copyright />
                        <UpAndDown id={id} prev={{ id: 1, title: "大前端" }} next={{ id: 1, title: "大前端" }}/>
                        <Comment></Comment>
                    </div>
                </div>
            </div>
        </>
    )
}