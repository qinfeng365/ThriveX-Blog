import Classics from "./Classics"
import Request from '@/utils/request'

export default async () => {
  const { data } = await Request("/article")

  return (
    <>
      <Classics data={data}></Classics>
    </>
  )
}