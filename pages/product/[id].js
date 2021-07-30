import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/router'

const ProductPage = () => {
  const { query } = useRouter()

  const [product, setProduct] = useState({})

  useEffect(() => {
    window.fetch(`/api/avo/${query.id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
  }, [query])

  return (
    <section>
      <h1>Página producto: {query.id}</h1>
      <h1>{product.name}</h1>
    </section>
  )
}

export default ProductPage
