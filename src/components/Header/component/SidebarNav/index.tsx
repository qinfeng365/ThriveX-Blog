import Show from "@/components/Show"
import { Cate } from "@/types/app/cate"
import Link from "next/link"
import { useEffect, useState } from "react"
import { IoIosArrowDown } from "react-icons/io"

interface Props {
  list: Cate[]
  open: boolean
  onClose: () => void
}

export default ({ list, open, onClose }: Props) => {
  return (
    <>
      <div className={`overflow-hidden fixed top-0 left-0 ${open ? 'w-6/12 p-5 border-r dark:border-[#2b333e]' : 'w-0'} h-full bg-[rgba(255,255,255,0.9)] dark:bg-[rgba(44,51,62,0.9)] backdrop-blur-[5px] transition-width z-[60]`}>
        <ul className="flex flex-col space-y-2">
          {list.map(one => (
            <li key={one.id} className="group/one relative hover:bg-[#e0e6ec] dark:hover:bg-[#495362] rounded-md transition-colors">
              <Link href={`${one.type === 'cate' ? `/cate/${one.id}?name=${one.name}` : one.url}`} className={`flex justify-between items-center p-3 px-5 text-[15px] group-hover/one:!text-primary transition-colors text-[#333] dark:text-white whitespace-nowrap`}>
                {one.icon} {one.name}
                <Show is={!!one.children.length} children={(
                  <IoIosArrowDown className="ml-2" />
                )} />
              </Link>

              <Show is={!!one.children.length} children={(
                <ul className="overflow-hidden top-[50px] w-full rounded-md">
                  {one.children.map(two => (
                    <li key={two.id} className='group/two'>
                      <Link href={`/cate/${two.id}?name=${two.name}`} className="inline-block w-full p-2.5 pl-10 text-[15px] box-border text-[#666] dark:text-white hover:!text-primary">
                        {two.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )} />
            </li>
          ))}
        </ul>
      </div>

      <div className={`fixed top-0 right-0 w-6/12 h-full bg-[rgba(0,0,0,0.6)] z-50 ${open ? '' : 'hidden'}`} onClick={onClose}></div>
    </>
  )
}