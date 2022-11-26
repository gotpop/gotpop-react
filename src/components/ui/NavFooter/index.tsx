import { AiOutlineShoppingCart } from 'react-icons/ai'
import ButtonIcon from '../ButtonIcon'
import { GetComponent } from '@utilities/getComponent'
import { IconType } from 'react-icons'
import { Link } from 'react-router-dom'
import styles from './NavFooter.module.css'
import { useShoppingCart } from '@context/ShoppingCartContext'

type NavItem = {
  id: string
  href: string
  test: string
  text: string
}

type Props = {
  navItems: NavItem[]
  iconsMap: Map<number, IconType>
}

export function NavFooter({ navItems, iconsMap }: Props) {
  const { openCart, cartQuantity } = useShoppingCart()

  return (
    <nav className={styles.navfooter}>
      {navItems?.map(item => (
        <Link key={item.id} to={item.href} data-test={item.test}>
          <>
            <span>{item.text}</span>
            <GetComponent componentsMap={iconsMap} id={item.id} />
          </>
        </Link>
      ))}
    </nav>
  )
}
