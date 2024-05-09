import { Fragment } from "react"

const ProductDetails = ({ params }) => {
    
    const { pid } = params

    return (
        <Fragment>
            <div className="flex w-screen h-screen justify-center items-center">Product Details [{ pid }]</div>
        </Fragment>
    )
}

export default ProductDetails
