import { Key, useEffect } from 'react'

import Intro from '@components/ui/Intro'
import LayoutStandard from '@components/layouts/LayoutStandard'
import Product from '@components/ui/Product'
import useFetch from '@hooks/useFetch'

type ProductType = {
  name: string
  id: number
  url: string
  price: number
}

const content = {
  title: 'Shop',
  text: 'Buy your developer accessories here.'
}

const URL = 'https://gotpop-api.vercel.app/api'

type returnedData = {
  loading: boolean
  error: boolean | undefined
  value: ProductType[]
}

export function Shop() {
  const { loading, error, value: shopItems }: returnedData = useFetch(URL)

  return (
    <LayoutStandard>
      <>
        <Intro content={content} />
        {shopItems && shopItems.map((product: ProductType, key: number) => (
          <Product product={product} key={key} />
        ))}
        {loading ? <>Loading...</> : error ? <>Error...</> : null}
      </>
    </LayoutStandard>
  )
}
