import Add from './add'

export default () => {
    let data: number[] = [];
    const getData = () => {
        data = [1, 2, 3]
    }
    getData()

    return (
        <>
            <div className="mt-36">
                <Add onSuccess={() => data.push(9)} />

                {data.map(item => <h1>Hello {item}</h1>)}
            </div>
        </>
    )
}