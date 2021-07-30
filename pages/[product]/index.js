import {useRouter} from 'next/router'

export default function Product() {
    const router = new useRouter()

    return (
        <div>
            <h1>Product: {router.query.productId}</h1>
        </div>
    )
}