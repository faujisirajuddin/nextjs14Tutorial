import { Metadata } from "next"

type props = {
    params: {
        productId: string
    }
}

//normal dynamic metadata
// export const generateMetadata = ({ params }: props): Metadata => {
//     return {
//         title: `Product ${params.productId}`
//     }
// }

//async metadata with promise
// export const generateMetadata = async ({ params }: props): Promise<Metadata> => {
//     const title = await new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(`iPhone ${params.productId}`)
//         }, 100)
//     })
//     return {
//         title: `Product ${title}`
//     }
// }

export default function ProductDetail({ params }: props) {
    return (
        <>
            <h1>Product Details {params.productId}</h1>
        </>
    )
}