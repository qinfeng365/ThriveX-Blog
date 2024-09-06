import Pagination from "../Pagination"
import Classics from "./Classics"
import { getArticleListAPI } from '@/api/article'

export default async ({ page }: { page: number }) => {
  const { data } = await getArticleListAPI(page)

  return (
    <>
      <div className="left w-[73%]">
        <Classics data={data}></Classics>

        <Pagination total={data.pages} page={page} className="flex justify-center mt-5" />
      </div>
    </>
  )
}