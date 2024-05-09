import { Fragment } from "react"
import { notFound } from "next/navigation"

const ReviewInfo = ({ params }) => {
    
    const { pid, rid } = params
    
    if (Number(rid) > 1000) {
        notFound()
    }

    return (
        <Fragment>
            <div className="flex w-screen h-screen justify-center items-center">ReviewInfo {rid} of product {pid}</div>
        </Fragment>
    )
}

export default ReviewInfo
