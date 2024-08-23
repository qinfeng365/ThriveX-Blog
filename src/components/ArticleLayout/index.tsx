import Classics from "./Classics"
import Request from '@/utils/request'

export default async () => {
  const { data } = await Request("/article")

  return (
    <>
      <div className="left w-[73%]">
        <Classics data={data}></Classics>
      </div>
    </>
  )
}