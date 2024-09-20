"use client"

export default ({ onSuccess }: { onSuccess: () => void }) => {
    return (
        <>
            <div>
                <button onClick={onSuccess}>添加</button>
            </div>
        </>
    )
}