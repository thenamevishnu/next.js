import { Fragment } from "react"

const Segment = ({ params }) => {
    
    const { slug } = params

    return (
        <Fragment>
            {
                !slug && <div className="flex w-screen h-screen justify-center items-center">No slug found!</div>
            }
            {
                slug?.length === 1 && <div className="flex w-screen h-screen justify-center items-center">Category: { slug[0] }</div>
            }
            {
                slug?.length === 2 && <div className="flex w-screen h-screen justify-center items-center">Category: {slug[0]} & Sub category: { slug[1] }</div>
            }
            {
                slug?.length === 3 && <div className="flex w-screen h-screen justify-center items-center">Category: {slug[0]} & Sub category: {slug[1]} & data: { slug[2] }</div>
            }
        </Fragment>
    )
}

export default Segment
