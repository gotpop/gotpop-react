import { AiOutlineCloseCircle } from 'react-icons/ai'
import ButtonIcon from '@components/ui/ButtonIcon'
import { CSSProperties } from 'react'
import { formatCurrency } from '@utilities/formatCurrency'
import { shopItems } from '@data/shop'
import styles from './CartItem.module.css'
import { useShoppingCart } from '@context/ShoppingCartContext'

type CartItemProps = {
  id: number
  quantity: number
}

const buttonRemoveVars = {
  ['--local-bg-colour']: 'var(--error)',
  ['--local-font-size']: 'var(--size-s-1)'
} as CSSProperties

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart()
  const item = shopItems.find(i => i.id === id)
  if (item == null) return null

  return (
    <section className={styles.cart}>
      <img src={item.url} />
      <section className={styles.content}>
        <div>
          <div>
            {item.name}
            {quantity > 1 && <span>x{quantity}</span>}
          </div>
          <div>{formatCurrency(item.price)}</div>
        </div>
        <div> {formatCurrency(item.price * quantity)}</div>
        <ButtonIcon
          icon={<AiOutlineCloseCircle />}
          handleClick={() => removeFromCart(item.id)}
          vars={buttonRemoveVars}
        />
      </section>
    </section>
  )
}
