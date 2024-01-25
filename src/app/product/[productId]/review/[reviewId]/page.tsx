"use client"
import { notFound } from "next/navigation"

const randomGeneration = (count:number)=>{
    return Math.floor(Math.random()*count)
}

export default function ProductReview({ params }:
    {
        params: {
            productId: string,
            reviewId: string
        }
    }) {

        const random = randomGeneration(2);

        if(random === 1){
            throw new Error("Error loading review")
        }

        if(parseInt(params.reviewId)>1000){
            notFound()
        }
    return (
        <>
            <h1>Review {params.reviewId} for Product {params.productId}</h1>
        </>
    )
}