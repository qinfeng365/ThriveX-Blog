import Pagination from "../Pagination"
import Classics from "./Classics"
import { getArticleListAPI } from '@/api/article'

export default async ({ pagination }: { pagination: Page }) => {
  const { data } = await getArticleListAPI(pagination)

  return (
    <>
      <div className="left w-[73%]">
        <Classics data={data}></Classics>
        <Pagination />
      </div>
    </>
  )
}