import { ReactNode } from 'react'
import Ripple from '@/components/Ripple'
import './index.scss'

const sty = {
    backgroundImage: "url(https://bu.dusays.com/2024/04/24/6628990012b51.jpg)",
}

interface Props {
    isRipple?: boolean,
    children?: ReactNode
}

export default ({ isRipple = true, children }: Props) => {
    return (
        <>
            <div className="SwiperComponent overflow-hidden h-[300px] sm:h-[400px] md:h-[500px] relative bg-cover bg-center after:content-[''] after:w-full after:h-[20%] after:absolute after:bottom-0 after:left-0 after:bg-[linear-gradient(to_top,#fff,transparent)] dark:after:bg-[linear-gradient(to_top,#2c333e,transparent)]" style={sty}>
                <div>{children}</div>
            </div>

            {isRipple && <Ripple />}
        </>
    )
}