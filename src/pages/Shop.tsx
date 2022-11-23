import GridAuto from '@components/ui/GridAuto'
import Intro from '@components/ui/Intro'
import Product from '@components/ui/Product'
import { shopItems } from '../data/shop'

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
  return (
    <>
      <Intro content={content} />
      <GridAuto>
        <>
          {shopItems.map((product: Item, key) => (
            <Product key={key} product={product} />
          ))}
        </>
      </GridAuto>
    </>
  )
}
