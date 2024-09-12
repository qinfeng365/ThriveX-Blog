import { getCateArticleListAPI } from "@/api/cate";
import Starry from "@/components/Starry"
import Swiper from "@/components/Swiper"
import Classics from "@/components/ArticleLayout/Classics";
import Pagination from "@/components/Pagination";

interface Props {
  params: { id: number };
  searchParams: { page: number; name: string };
};

export default async ({ params, searchParams }: Props) => {
  const id = params.id;
  const page = searchParams.page || 1;
  const name = searchParams.name;

  const { data } = await getCateArticleListAPI(id, page)

  return (
    <>
      <div>
        <Swiper>
          {/* 星空背景组件 */}
          <Starry />

          {/* 分类信息 */}
          <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 w-[80%] text-center text-white text-[30px] custom_text_shadow">
            <span>{name} ~ 共计{data.total}篇文章</span>
          </div>
        </Swiper>

        <div className="w-6/12 mx-auto">
          <Classics data={data} />

          <Pagination total={data.pages} page={page} url={`?name=${name}`} className="flex justify-center mt-5" />
        </div>
      </div>
    </>
  )
}