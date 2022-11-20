import { AiOutlineForm, AiOutlineHome, AiOutlineShoppingCart } from 'react-icons/ai'

import { CgCardSpades } from 'react-icons/cg'
import Logo from '@ui/Logo'
import Nav from '@ui/Nav'
import { navPrimary } from 'data/nav-primary'
import styles from './Header.module.css'

const icons = new Map([
  [1, CgCardSpades],
  [2, AiOutlineForm],
  [3, AiOutlineHome],
  [4, AiOutlineShoppingCart]
])

type Props = {
  vars: object;
}

const Header = ({ vars }: Props) => {
  return (
    <header className={styles.header} style={vars}>
      <section className={styles.grid}>
        <Logo />
        <Nav navItems={navPrimary} iconsMap={icons} />
      </section>
    </header>
  )
}

Header.defaultProps = {
  vars: {}
}

export default Header
