"use client"

import { useState } from "react"

export default () => {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <button onClick={() => {
                    setCount(count + 1)
                }}>+1</button>

                <button onClick={() => {
                    setCount(count - 1)
                }}>-1</button>
            </div>
        </>
    )
}