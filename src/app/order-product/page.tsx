"use client"
import { useRouter } from "next/navigation"

export default function OrderProduct() {
    const router = useRouter()

    const clickHandler = () => {
        console.log("Order Placed")
        router.push("/")
    }
    return (
        <>
            <h2>Order Product</h2>
            <button onClick={clickHandler}>Place Order</button>
        </>
    )
}