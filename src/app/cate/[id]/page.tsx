import { getCateArticleListAPI } from "@/api/cate";
import Starry from "@/components/Starry"
import Swiper from "@/components/Swiper"
import Classics from "@/components/ArticleLayout/Classics";

interface Props {
  params: { id: number };
  searchParams: { name: string };
};

export default async ({ params, searchParams }: Props) => {
  const id = params.id;
  const name = searchParams.name;

  const { data } = await getCateArticleListAPI(id)

  return (
    <>
      <div>
        <Swiper>
          {/* 星空背景组件 */}
          <Starry />

          {/* 分类信息 */}
          <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 w-[80%] text-center text-white text-[30px] custom_text_shadow">
            <span>{name} ~ 共计{data.result.length}篇文章</span>
          </div>
        </Swiper>

        <div className="w-6/12 mx-auto">
          <Classics data={data} />
        </div>
      </div>
    </>
  )
}