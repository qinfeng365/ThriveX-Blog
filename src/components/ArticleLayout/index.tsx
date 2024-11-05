import Pagination from "../Pagination"
import Classics from "./Classics"
import { getArticlePagingAPI } from '@/api/article'

export default async ({ page }: { page: number }) => {
  const { data } = await getArticlePagingAPI({ pagination: { page } })
  data.result = data.result?.filter(item => item.config.status !== "no_home")
  
  return (
    <>
      <div className="w-full md:w-[90%] lg:w-[68%] xl:w-[73%] mx-auto transition-width">
        <Classics data={data}></Classics>

        <Pagination total={data?.pages} page={page} className="flex justify-center mt-5" />
      </div>
    </>
  )
}