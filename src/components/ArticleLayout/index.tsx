import { getArticlePagingAPI } from '@/api/article'
import Pagination from "../Pagination"
import Classics from "./Classics"
import Waterfall from "./Waterfall"
import { getThemeDataAPI } from '@/api/project'

export default async ({ page }: { page: number }) => {
  const { data: theme } = await getThemeDataAPI()

  // 如果是瀑布流布局就显示28条数据，否则显示8条
  const { data } = await getArticlePagingAPI({ pagination: { page, size: theme.isArticleLayout === "waterfall" ? 28 : 8 } })
  data.result = data.result?.filter(item => item.config.status !== "no_home")

  return (
    <>
      <div className="w-full md:w-[90%] lg:w-[68%] xl:w-[73%] mx-auto transition-width">
        {theme.isArticleLayout === "classics" && <Classics data={data} />}
        {theme.isArticleLayout === "waterfall" && <Waterfall data={data} />}

        <Pagination total={data?.pages} page={page} className="flex justify-center mt-5" />
      </div>
    </>
  )
}