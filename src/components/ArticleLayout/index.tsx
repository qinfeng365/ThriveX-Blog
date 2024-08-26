import Classics from "./Classics"
import { getArticleListAPI } from '@/api/article'

export default async () => {
  const { data } = await getArticleListAPI()

  return (
    <>
      <div className="left w-[73%]">
        <Classics data={data}></Classics>
      </div>
    </>
  )
}