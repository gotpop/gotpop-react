import { AiFillMinusCircle, AiFillPlusCircle, AiOutlineShoppingCart } from 'react-icons/ai'

import { BsTrash } from "react-icons/bs";
import ButtonIcon from '../ButtonIcon'
import { CSSProperties } from 'react'
import { formatCurrency } from '@utilities/formatCurrency'
import styles from './Product.module.css'
import { useShoppingCart } from '@context/ShoppingCartContext'

type Item = {
  name: string
  id: number
  url: string
  price: number
}

type Props = {
  product: Item
}

const buttonRemoveVars = {
  ['--local-bg-colour']: 'var(--error)',
  ['--local-font-size']: 'var(--size-s-1)'
} as CSSProperties

const Product = ({ product }: Props) => {
  const { name, url, price, id } = product
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart
  } = useShoppingCart()
  const quantity = getItemQuantity(id)

  return (
    <section className={styles.product}>
      <img className={styles.image} src={url} alt="Product" />
      <div className={styles.content}>
        <section className={styles.intro}>
          <h3>{name}</h3>
          <span className={styles.price}>{formatCurrency(price)}</span>
        </section>
        {quantity === 0 ? (
          <ButtonIcon
            handleClick={() => increaseCartQuantity(id)}
            text="Add to cart"
            icon={<AiOutlineShoppingCart />}
          />
        ) : (
          <div className={styles.controls}>
            <ButtonIcon icon={<AiFillMinusCircle />} handleClick={() => decreaseCartQuantity(id)} />
            <ButtonIcon
              text={`Remove ${quantity}`}
              vars={buttonRemoveVars}
              handleClick={() => removeFromCart(id)}
              icon={<BsTrash />}
            />
            <ButtonIcon icon={<AiFillPlusCircle />} handleClick={() => increaseCartQuantity(id)} />
          </div>
        )}
      </div>
    </section>
  )
}

Product.defaultProps = {
  product: {
    title: 'GotPop Starter',
    description: 'A Next.js starter template using Next.js 13',
    link: {
      text: 'Find out more!',
      href: '#panel-1'
    }
  }
}

export default Product
