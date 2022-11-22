import { CSSProperties, useEffect, useState } from 'react'

import { AiOutlineCloseCircle } from 'react-icons/ai'
import ButtonIcon from '@components/ui/ButtonIcon'
import { CartItem } from '@blocks/CartItem'
import { formatCurrency } from '@utilities/formatCurrency'
import { shopItems } from '@data/shop'
import styles from './ShoppingCart.module.css'
import { useShoppingCart } from '@context/ShoppingCartContext'

type ShoppingCartProps = {
  isOpen: boolean
}

const closeVars = {
  ['--local-bg-colour']: 'var(--error)',
  ['--local-font-size']: 'var(--size-s-1)'
} as CSSProperties

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart()
  const state = (isOpen: boolean) => (isOpen ? 'open' : 'closed')

  const drawerState = (isOpen: boolean) =>
    ({
      ['--local-drawer-state']: `var(--local-drawer-${state(isOpen)})`
    } as CSSProperties)

  return (
    <section style={drawerState(isOpen)} className={styles.cart}>
      <ButtonIcon
        icon={<AiOutlineCloseCircle />}
        handleClick={closeCart}
        vars={closeVars}
      />
      <h2>Cart</h2>
      {cartItems.map(item => (
        <CartItem key={item.id} {...item} />
      ))}
      <div>
        {formatCurrency(
          cartItems.reduce((total, cartItem) => {
            const item = shopItems.find(i => i.id === cartItem.id)
            return total + (item?.price || 0) * cartItem.quantity
          }, 0)
        )}
      </div>
    </section>
  )
}
