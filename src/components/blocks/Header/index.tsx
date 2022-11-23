import {
  AiOutlineForm,
  AiOutlineHome,
  AiOutlineShoppingCart
} from 'react-icons/ai'

import { CSSProperties } from 'react'
import { CgCardSpades } from 'react-icons/cg'
import Grid from '@components/ui/Grid'
import GridWrap from '@components/ui/GridWrap'
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
  vars: CSSProperties
}

const Header = ({ vars }: Props) => {
  return (
    <header
      className={styles.header}
      style={{
        gridArea: 'head',
        position: 'sticky',
        top: '0',
        marginBottom: '2rem'
      }}
    >
      <GridWrap>
        <Grid>
          <>
            <Logo />
            <Nav navItems={navPrimary} iconsMap={icons} />
          </>
        </Grid>
      </GridWrap>
    </header>
  )
}

Header.defaultProps = {
  vars: {}
}

export default Header
