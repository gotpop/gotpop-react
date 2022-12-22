import { Key, useEffect } from 'react'

import { CSSProperties } from 'react'
import Product from '@components/ui/Product'
import useFetch from '@hooks/useFetch'

type props = {
  url: string
}

type ProductType = {
  name: string
  id: number
  url: string
  price: number
}

type returnedData = {
  loading: boolean
  error: boolean | undefined
  value: ProductType[]
}

const Shopping = ({ url }: props) => {
  const { loading, error, value: shopItems }: returnedData = useFetch(url)

  return (
    <>
      {shopItems && <h4 data-testid="liamz">Liam</h4>}
      {shopItems &&
        shopItems.map((product: ProductType, key: number) => (
          <Product product={product} key={key} data-testid="liam" />
        ))}
      {loading ? <>Loading...</> : error ? <>Error...</> : null}
    </>
  )
}

Shopping.defaultProps = {
  vars: null
}

export default Shopping
