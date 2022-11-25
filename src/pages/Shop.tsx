import Intro from '@components/ui/Intro'
import LayoutStandard from '@components/layouts/LayoutStandard'
import Product from '@components/ui/Product'
import { shopItems } from '../data/shop'
import { useEffect } from 'react'

type Item = {
  name: string
  id: number
  url: string
  price: number
}

const content = {
  title: 'Shop',
  text: 'Buy your developer accessories here.'
}

export function Shop() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <LayoutStandard>
      <>
        <Intro content={content} />
        {shopItems.map((product: Item, key) => (
          <Product key={key} product={product} />
        ))}
      </>
    </LayoutStandard>
  )
}
